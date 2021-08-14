import React from 'react';
import { useState, useRef, useCallback } from 'react';
import usePassengerSearch from './usePassengerSearch';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function Passengers() {

    const size = 10;
    const [pageNumber, setPageNumber] = useState(1);
    const { loading, error, passengers, hasMore } = usePassengerSearch(size, pageNumber);

    const observer = useRef();
    const lastPassengerRef = useCallback(node => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPageNumber(prevPageNumber => prevPageNumber + 1);
            }
        });
        if (node) observer.current.observe(node);
    }, [loading, hasMore]);

    return (
        <div>
            <h4>Passenger List</h4>
            {passengers && passengers.map((passenger, index) => {
                if (passengers.length === index + 1) {
                    return (
                        <div ref={lastPassengerRef} key={index}>
                            <div style={{ margin: '5px auto', border: '1px solid lightgrey', width: '50vw' }}>
                                <div>Name :{passenger.name}</div>
                                <div>Id :{passenger._id}</div>
                                <div>Trips: {passenger.trips}</div>
                                <div>Country: {passenger.airline[0].country}</div>
                            </div>
                        </div>
                    )
                } else {
                    return (
                        <div key={index}>
                            <div style={{ margin: '5px auto', border: '1px solid lightgrey', width: '50vw' }}>
                                <div>Name :{passenger.name}</div>
                                <div>Id :{passenger._id}</div>
                                <div>Trips: {passenger.trips}</div>
                                <div>Country: {passenger.airline[0].country}</div>
                            </div>
                        </div>
                    )
                }
            })}
            <div>{loading && <Loader
                type="Circles"
                color="#00BFFF"
                height={100}
                width={100}
            />}</div>
            <div>{error && 'Error...'}</div>
        </div >
    );
}
