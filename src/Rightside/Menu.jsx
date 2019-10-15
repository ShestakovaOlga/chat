import React, { useEffect, useGlobal } from 'reactn';
import { IoMdPerson } from "react-icons/io";
import { IoIosCloseCircle, IoMdSettings, IoIosCamera } from "react-icons/io";
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
            <IoIosCamera style={{
                color: 'white',
                position: 'relative',
                left: 44,
                top: 15,
                fontSize: '1rem',
                cursor: 'pointer',
                pointerEvents: 'none'
            }} />
            {me.avatar ? <div onClick={() => {
                setShowSelectimg(!showSelectimg)
                console.log(showSelectimg);
            }} style={{
                width: 47,
                height: 50,
                marginRight: 5,
                color: '#815ae6',
                cursor: 'pointer'
            }}>
                <img style={{ width: '100%', height: '100%' }} src={me.avatar} alt="" />
            </div> : <IoMdPerson onClick={() => {
                setShowSelectimg(!showSelectimg)
                console.log(showSelectimg);

            }} style={{
                width: 50,
                height: 50,
                marginRight: 5,
                color: '#815ae6',
                cursor: 'pointer'
            }} />}
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
                margin: '10px 5px',
                cursor: 'pointer',
            }}><IoMdSettings />{showSettings}</button>
            <div style={{ width: 39, }}>
                {['tablet', 'phone'].includes(mode) && <button style={{
                    padding: 4,
                    borderRadius: '40px',
                    backgroundColor: 'white',
                    color: '#815ae6',
                    border: 'none',
                    outline: 'none',
                    fontSize: '1.5rem',
                    margin: '10px 5px',
                    cursor: 'pointer',
                }} onClick={() => {
                    setShowMenu(!showMenu)
                }}><IoIosCloseCircle />{showMenu}</button>}
            </div>
        </div>


    </div>
}