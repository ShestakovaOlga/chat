import React, { useEffect, useGlobal } from 'reactn';
import { IoMdPerson } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useReducer } from 'react';



export function Menu(props) {
    const [showMenu, setShowMenu] = useGlobal('showMenu')
    const [showGroups, setshowGroups] = useGlobal('showGroups')
    const [mode] = useGlobal('mode')
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
            {mode === 'phone' && <button style={{
                color: '#2e0696',
                fontSize: '1.5rem',
                marginRight: 20,
                outline: 'none',
                backgroundColor: 'white'
            }}
                onClick={() => {
                    setActiveChat(false)
                }}><IoIosArrowBack /></button>}

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


    </div>
}