import React, { useState, useGlobal, useRef } from 'reactn';
import { IoIosPaperPlane } from "react-icons/io";
import { sendMessage } from '../server';
import { useEffect } from 'react';
import { IoMdPerson } from "react-icons/io";
import { Menu } from './Menu';




export function Center(props) {
    const [text, setText] = useState('')
    const [activeChat, setActiveChat] = useGlobal('activeChat')
    const [chats] = useGlobal('chats')
    const scroll = useRef(null)
    const [showMessage, setShowMessage] = useGlobal('showMessage')
    const [users] = useGlobal('users')
    const [me] = useGlobal('me')
    const [mode] = useGlobal('mode')

    //Hacer scroll hacia abajo en los mensajes
    useEffect(() => {
        scroll.current.scrollTo(0, scroll.current.scrollHeight)
    }, [chats, activeChat])


    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 3,
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF',
        fontFamily: "'Roboto', sans-serif",
    }}>
        <div>
            <Menu />
        </div>

        <div ref={scroll} style={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            overflowY: 'scroll',

        }}>
            {chats.find(m => m.ID === activeChat) && chats.find(m => m.ID === activeChat).Messages.sort((a, b) => {
                return a.date > b.date
            }).map((message) => <div key={message.text + message.date} style={{
                margin: '10px 0px',
                padding: 2
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    {(me ? [...users, me] : users).find((u) => u.ID == message.author) ? <div style={{
                        width: 40,
                        height: 45,
                        marginRight: 5,
                    }}><img style={{ width: '100%', height: '100%' }} src={[...users, me].find((u) => u.ID == message.author).avatar} alt="" /></div> : <IoMdPerson style={{
                        width: 30,
                        height: 30,
                        marginRight: 5,
                        color: '#815ae6',
                    }} />}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        {getUsername(chats, activeChat, message)}
                        <div style={{ fontSize: '0.8rem', color: '#797D7F', }}>{new Date(message.CreatedAt).toLocaleString()}</div>
                    </div>
                </div>
                <div style={{
                    padding: 5,
                    borderTop: '1px solid #E8DAEF'
                }}>
                    {message.text}
                </div>
            </div>)}
        </div>
        {activeChat && <div style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            borderTop: '1px solid #BDC3C7'
        }}>
            <textarea autoFocus onChange={(e) => { setText(e.target.value) }}
                onKeyPress={(e) => {
                    if (e.key == 'Enter' && !e.shiftKey) {
                        sendMessage(text, activeChat)
                        setText('')
                        e.preventDefault();
                        e.stopPropagation();
                    }
                }}
                style={{
                    flexGrow: 1,
                    outline: 'none',
                    padding: 10,
                    boxSizing: 'border-box',
                    resize: 'none',
                    border: '1px solid #BDC3C7',
                    borderRadius: 20,
                    fontSize: '0.8rem',
                    marginLeft: 10,
                    backgroundColor: 'white',
                    ...mode === 'phone' ? {
                        height: '20px'
                    } : {},
                }} name="" id="" value={text} placeholder='Escribe mensaje...'></textarea>
            <button disabled={!activeChat} onClick={() => {
                sendMessage(text, activeChat)
                setText('')
            }} style={{
                width: 100,
                height: 70,
                border: 'none',
                color: '#815ae6',
                outline: 'none',
                fontSize: '2rem',
                backgroundColor: 'white',
                ...mode === 'phone' ? {
                    fontSize: '1rem',
                } : {},
            }} type="submit">  <IoIosPaperPlane /></button>

        </div>}
    </div>
}


function getUsername(chats, activeChat, message) {
    const chat = chats.find(c => c.ID == activeChat)
    const author = chat.members.find(m => m.ID == message.author)
    return author && author.name
}