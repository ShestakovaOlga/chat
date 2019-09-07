import React, { useEffect, useGlobal } from 'reactn';
import { IoMdPerson } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
import { useReducer } from 'react';


export function Menu(props) {
    const [showMenu, setShowMenu] = useGlobal('showMenu')
    const [showGroups, setshowGroups] = useGlobal('showGroups')
    const [w] = useGlobal('w')
    const [activeChat, setActiveChat] = useGlobal('activeChat')
    const [chats] = useGlobal('chats')

    return <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: '1px solid #E1E1E8',
        backgroundColor: 'white',
    }}>

        <div style={{
            display: 'flex',
            alignItems: 'center',
        }}>
            <IoMdPerson style={{
                width: 50,
                height: 50,
                marginRight: 5,
                color: '#815ae6',
            }} />
            <div>
                <span>{activeChat && chats.find((chat) => chat.ID == activeChat).name}</span>
                <div>Date</div>
            </div>
        </div>

        <div>
            {w >= 1000 && <button style={{
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
            }} />{showMenu}</button>}
        </div>
    </div>
}