export const getDateDifferenceFromNow = (fromDate) => {
    if (!fromDate) return 'Just now';

    const from = new Date(fromDate);
    const now = new Date();

    if (isNaN(from)) return 'Just now';

    let difference = Math.floor((now.getTime() - from.getTime()) / 1000); // seconds

    if (difference < 5) {
        return 'Just now';
    }

    const intervals = [
        { label: 'year', seconds: 3600 * 24 * 365 },
        { label: 'month', seconds: 3600 * 24 * 30 },
        { label: 'day', seconds: 3600 * 24 },
        { label: 'hour', seconds: 3600 },
        { label: 'minute', seconds: 60 },
        { label: 'second', seconds: 1 },
    ];

    for (const interval of intervals) {
        const count = Math.floor(difference / interval.seconds);
        if (count >= 1) {
            return `${count} ${interval.label}${count > 1 ? 's' : ''} ago`;
        }
    }

    return 'Just now'; // fallback
};
