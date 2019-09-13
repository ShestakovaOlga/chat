import React, { useEffect, useGlobal } from 'reactn';
import { IoMdPerson } from "react-icons/io";
import { IoMdCreate, IoMdSettings } from "react-icons/io";
import { getMe } from '../server';



export function Menu(props) {
    const [showMenu, setShowMenu] = useGlobal('showMenu')
    const [mode] = useGlobal('mode')
    const [me] = useGlobal('me')
    const [showSelectimg, setShowSelectimg] = useGlobal('showSelectimg')
    const [showSettings, setShowSettings] = useGlobal('showSettings')

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
        backgroundColor: 'white',
        color: '#815ae6',
        width: '100%',
        marginBottom: 20,
        boxSizing: 'border-box',
    }}>

        <div style={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
        }}>
            <IoMdCreate style={{
                color: 'black',
                position: 'relative',
                left: 45,
                top: 10,
                fontSize: '1.2rem',
                cursor: 'pointer'
            }} />
            <IoMdPerson onClick={() => {
                setShowSelectimg(!showSelectimg)
                console.log(showSelectimg);

            }} style={{
                width: 50,
                height: 50,
                marginRight: 5,
                color: '#815ae6',
                cursor: 'pointer'
            }} />
            <div style={{ flex: 1 }}>
                <span>{me.name}</span>
            </div>
            <button onClick={() => {
                setShowSettings(!showSettings)
                console.log(showSettings);

            }} style={{
                padding: 4,
                borderRadius: '40px',
                backgroundColor: 'white',
                color: '#815ae6',
                border: 'none',
                outline: 'none',
                fontSize: '1.5rem',
                margin: '10px 10px',
                cursor: 'pointer',
            }}><IoMdSettings />{showSettings}</button>
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