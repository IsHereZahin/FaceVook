import axios from "axios";
import { useEffect } from "react";
import api from "../api";
import { useAuth } from "./useAuth";

const useAxios = () => {
    const { auth, setAuth } = useAuth();

    useEffect(() => {
        // Request interceptor
        const requestInterceptor = api.interceptors.request.use(
            (config) => {
                const authToken = auth?.authToken;
                if (authToken) {
                    config.headers.Authorization = `Bearer ${authToken}`;
                }
                return config;
            },
            (error) => Promise.reject(error)
        );

        // Response interceptor
        const responseInterceptor = api.interceptors.response.use(
            (response) => response,
            async (error) => {
                const originalRequest = error.config;

                if (error.response?.status === 401 && !originalRequest._retry) {
                    originalRequest._retry = true;

                    try {
                        const refreshToken = auth?.refreshToken;
                        const response = await axios.post(
                            `${import.meta.env.VITE_SERVER_BASE_URL}/auth/refresh-token`,
                            { refreshToken }
                        );

                        const { token } = response.data;
                        console.log(`New auth token: ${token}`);

                        setAuth({ ...auth, authToken: token });

                        originalRequest.headers.Authorization = `Bearer ${token}`;
                        return api(originalRequest);
                    } catch (refreshError) {
                        return Promise.reject(refreshError);
                    }
                }

                return Promise.reject(error);
            }
        );

        // Cleanup
        return () => {
            api.interceptors.request.eject(requestInterceptor);
            api.interceptors.response.eject(responseInterceptor);
        };
    }, []);

    return { api };
};

export default useAxios;