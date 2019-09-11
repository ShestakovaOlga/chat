import React, { useEffect, useGlobal } from 'reactn';
import { IoMdPerson } from "react-icons/io";
import { IoMdCreate } from "react-icons/io";
import { getMe } from '../server';



export function Menu(props) {
    const [showMenu, setShowMenu] = useGlobal('showMenu')
    const [mode] = useGlobal('mode')
    const [me] = useGlobal('me')
    const [showSelectimg, setShowSelectimg] = useGlobal('showSelectimg')

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
        boxSizing: 'border-box'

    }}>

        <div style={{
            display: 'flex',
            alignItems: 'center',
        }}>
            <IoMdCreate style={{
                color: 'black',
                position: 'relative',
                left: 45,
                top: 10,
                fontSize: '1.2rem'
            }} />
            <IoMdPerson onClick={() => {
                setShowSelectimg(!showSelectimg)
                console.log(showSelectimg);

            }} style={{
                width: 50,
                height: 50,
                marginRight: 5,
                color: '#815ae6',
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