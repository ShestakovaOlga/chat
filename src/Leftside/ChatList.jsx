import React, { useState, useEffect, useGlobal } from 'reactn';
import { Chat } from './Chat';
import { getChats } from '../server'




export function ChatList(props) {
    const [chats, setChats] = useGlobal('chats')

    useEffect(() => {
        getChats()
    }, [])

    return <div style={{
        height: '100%',
        overflowY: 'scroll',
    }}>
        {chats.map((chat) => <Chat chat={chat} />)}
    </div>
}