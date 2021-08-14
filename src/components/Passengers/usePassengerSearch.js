import { useState, useEffect } from 'react';
import axios from 'axios';

export default function usePassengerSearch(size, pageNumber) {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [passengers, setPassengers] = useState([]);
    const [hasMore, setHasMore] = useState(false);

    useEffect(() => {
        setPassengers([])
    }, [size])

    useEffect(() => {
        setLoading(true);
        setError(false);
        let cancel;
        axios.get('https://api.instantwebtools.net/v1/passenger?page=0&size=10', {
            params: { size: size, page: pageNumber },
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            setPassengers(prevPassenger => {
                return [...new Set([...prevPassenger, ...res.data.data])]
            });
            setHasMore(res.data.data.length > 0);
            setLoading(false);
        }).catch((e) => {
            if (axios.isCancel(e)) return;
            setError(true);
        })
        return () => cancel();
    }, [size, pageNumber]);

    return { loading, error, passengers, hasMore }
}