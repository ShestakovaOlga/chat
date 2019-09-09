import React, { useEffect, useGlobal } from 'reactn';
import { IoMdPerson } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
import { getMe } from '../server';



export function Menu(props) {
    const [showMenu, setShowMenu] = useGlobal('showMenu')
    const [mode] = useGlobal('mode')
    const [me] = useGlobal('me')
    useEffect(() => {
        getMe()
    }, [])

    if (!me) {
        return null
    }

    return <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#2e0696',
        color: 'white',
        width: '100%',
        boxSizing: 'border-box'

    }}>

        <div style={{
            display: 'flex',
            alignItems: 'center',
        }}>
            <IoMdPerson style={{
                width: 50,
                height: 50,
                marginRight: 5,
                color: 'white',
            }} />
            <div>
                <span>{me.name}</span>
            </div>
        </div>

        <div>
            {['tablet', 'phone'].includes(mode) && <button style={{
                padding: '1px',
                width: 30,
                borderRadius: '40px',
                backgroundColor: '#815ae6',
                color: 'white',
                border: 'none',
                outline: 'none',
                cursor: 'pointer',
                marginRight: 10
            }} onClick={() => {
                setShowMenu(!showMenu)
            }}>X{showMenu}</button>}
        </div>
    </div>
}