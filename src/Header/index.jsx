import React from 'react';
import { Logout } from '../server';

export function Header(){
    return <div style={{
        width:'100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent:'space-between',
    }}>
        <img src="
        " alt="WorkLine"/>
        
        <button onClick={() => {
            Logout()
        }} style={{
            padding: 6,
            width: 80,
            borderRadius: '40px',
            backgroundColor: '#815ae6',
            color: 'white',
            border: 'none',
            outline: 'none',
            fontSize: '0.8rem',
            margin: '10px 20px',
            fontFamily: "'Lexend Deca', sans-serif",
            cursor: 'pointer',
        }}>Log out</button>
    </div>
}