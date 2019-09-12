import React, { useState, useGlobal } from 'reactn';
import { IoMdOpen, IoIosArrowBack } from "react-icons/io";

export function Menu(props) {
    const [showContacts, setShowContacts] = useGlobal('showContacts')

    return <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: showContacts ? 'row' : 'row-reverse',
        height: 50,
        border: '1px solid #F4F4F5',
    }}>
        {showContacts && <button onClick={() => {
            setShowContacts(false)
        }} style={{
            color: '#815ae6',
            fontSize: '1.2rem',
            backgroundColor: '#FFFFFF',
            cursor: 'pointer',
            outline: 'none',
            border: 'none'
        }}><IoIosArrowBack /></button>}

        <button onClick={() => {
            setShowContacts(true)
        }}
            style={{
                color: '#815ae6',
                fontSize: '1.2rem',
                backgroundColor: '#FFFFFF',
                cursor: 'pointer',
                outline: 'none',
                border: 'none'
            }}><IoMdOpen /></button>
    </div>
}