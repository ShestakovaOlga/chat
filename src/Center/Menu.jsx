import React, { useEffect, useGlobal } from 'reactn';
import { IoMdPerson } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useReducer } from 'react';



export function Menu() {
    const [showMenu, setShowMenu] = useGlobal('showMenu')
    const [showGroups, setshowGroups] = useGlobal('showGroups')
    const [mode] = useGlobal('mode')
    const [activeChat, setActiveChat] = useGlobal('activeChat')
    const [chats] = useGlobal('chats')

    if (!chats.find((chat) => chat.ID == activeChat)) {
        return null
    }

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
            {mode === 'phone' && <button style={{
                color: '#2e0696',
                fontSize: '1.2rem',
                marginRight: 10,
                outline: 'none',
                backgroundColor: 'white',
                border: 'none'
            }}
                onClick={() => {
                    setActiveChat(false)
                }}><IoIosArrowBack /></button>}

            {chats.find((chat) => chat.ID == activeChat).avatar ? <div style={{
                width: 43,
                height: 50,
                marginRight: 5,
                color: '#815ae6',
            }}><img style={{ width: '100%', height: '100%' }} src={chats.find((chat) => chat.ID == activeChat).avatar} alt="" /></div> : <IoMdPerson style={{
                width: 50,
                height: 50,
                marginRight: 5,
                color: '#815ae6',
            }} />}
            <div>
                <span>{activeChat && chats.find((chat) => chat.ID == activeChat).name}</span>
                {chats.find((chat) => chat.ID == activeChat).Messages.length > 0 && <div>{new Date(chats.find((chat) => chat.ID == activeChat).Messages[chats.find((chat) => chat.ID == activeChat).Messages.length - 1].UpdatedAt).toLocaleString()}</div>}
            </div>
        </div>


    </div>
}