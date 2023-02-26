import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Fib() {
    const [seenIndexes, setSeenIndexes] = useState([]);
    const [values, setValues] = useState({});
    const [index, setIndex] = useState('');

    useEffect(() => {
        fetchIndexes();
        fetchValues();
    }, []);

    const fetchValues = async () => {
        const values = await axios.get('/api/values/current');
        setValues(values.data);
    };

    const fetchIndexes = async () => {
        const seenIndexes = await axios.get('/api/values/all');
        setSeenIndexes(seenIndexes.data);
    };

    return <div>Fib</div>;
}
