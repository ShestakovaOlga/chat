import React, { useGlobal } from 'reactn';
import { Logout } from '../server';
import { IoMdPerson } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";

export function Header() {
    const [mode] = useGlobal('mode')
    const [showMenu, setShowMenu] = useGlobal('showMenu')
    return <div style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    }}>
        <div style={{ fontSize: '2rem', }}>
            <span >in</span><span style={{ color: '#2e0696' }}>Work</span>
        </div>



        <div style={{
            display: 'flex',
            alignItems: 'center',
        }}>
            <button onClick={() => {
                Logout()
            }} style={{
                padding: 4,
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
            {['tablet', 'phone'].includes(mode) && <button style={{
                padding: '1px 4px',
                width: 60,
                borderRadius: '40px',
                backgroundColor: '#815ae6',
                color: 'white',
                border: 'none',
                outline: 'none',
                cursor: 'pointer',
                marginRight: 5
            }} onClick={() => {
                setShowMenu(!showMenu)
            }}><IoIosMenu style={{
                color: 'white',
                fontSize: '1.2rem',
            }} /></button>}
        </div>
    </div>
}