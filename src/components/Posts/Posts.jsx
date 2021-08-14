import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Posts() {

    const [responseData, setResponseData] = useState('');

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            setResponseData(res.data);
        }, []);
    });

    return (
        <div>
            <h4>Posts</h4>
            {responseData && responseData.map((post, index) => {
                return (
                    <div key={index}>
                        {post.title}
                    </div>
                );
            })}
        </div >
    );
}
