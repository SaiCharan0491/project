import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Home() {
    const backgroundStyle = {
        backgroundcolor: 'rgb(18, 89, 164)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw',
    };

    return (
        <div style={backgroundStyle}>
            <h1 style={{
                color: 'violet',
                display: 'center',
                justifycontent: 'center',
                alignitems: 'center',
                padding: '5px 10px',
                fontsize: '16px'
            }}>Welcome to Home</h1>
        </div>
    );
}
