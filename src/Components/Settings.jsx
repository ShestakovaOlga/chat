import React, { useGlobal } from 'reactn'
import { IoIosArrowBack } from "react-icons/io";

export function Settings() {
    const [showSettings, setShowSettings] = useGlobal('showSettings')
    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100vh',
        backgroundColor: 'white',
        flex: 1,
    }}>
        <button style={{
            color: '#2e0696',
            fontSize: '1.2rem',
            marginRight: 10,
            outline: 'none',
            backgroundColor: 'white',
            border: 'none'
        }}
            onClick={() => {
                setShowSettings(false)
            }}><IoIosArrowBack /></button>
    </div>
}