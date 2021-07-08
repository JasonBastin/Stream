import React from 'react';
import { eventStats } from '../../api/fetchMmaStats';
import "./Stats.css";

export default function Stats() {
    const getInfo = () => {
        eventStats();
    }
    getInfo();

    return (
        <div className="stats">
            <h1>Stats</h1>
        </div>
    )
}
