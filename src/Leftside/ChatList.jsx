import React, { useState, useEffect, useGlobal } from 'reactn';
import { Chat } from './Chat';
import { getChats } from '../server'




export function ChatList(props) {
    const [chats, setChats] = useGlobal('chats')
    const [notifications] = useGlobal('notifications')

    useEffect(() => {
        console.log({ notifications });
    }, [notifications])
    useEffect(() => {
        getChats()
    }, [])

    return <div style={{
        height: '100%',
        overflowY: 'scroll',
    }}>
        {chats.map((chat) => <Chat key={chat.ID} chat={chat} notifications={notifications[chat.ID]} />)}
    </div>
}