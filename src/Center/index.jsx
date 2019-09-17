import React, { useState, useGlobal, useRef } from 'reactn';
import { IoIosPaperPlane } from "react-icons/io";
import { sendMessage } from '../server';
import { useEffect } from 'react';
import { IoMdPerson } from "react-icons/io";
import { Menu } from './Menu'



export function Center(props) {
    const [messages, setMessages] = useGlobal('messages')
    const [text, setText] = useState('')
    const [activeChat, setActiveChat] = useGlobal('activeChat')
    const [chats] = useGlobal('chats')
    const scroll = useRef(null)
    const [showMessage, setShowMessage] = useGlobal('showMessage')

    //Hacer scroll hacia abajo en los mensajes
    useEffect(() => {
        scroll.current.scrollTo(0, scroll.current.scrollHeight)
    }, [messages])


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
            {messages.sort((a, b) => {
                return a.date > b.date
            }).map((message) => <div key={message.text + message.date} style={{
                margin: '10px 10px',
                padding: 2
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    {chat.avatar ? <div style={{
                        width: 45,
                        height: 50,
                        marginRight: 5,
                    }}><img styel={{ width: '100%', height: '100%' }} src={chat.avatar} alt="" /></div> : <IoMdPerson style={{
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
        <div style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            borderTop: '1px solid #BDC3C7'
        }}>
            <textarea disabled={!activeChat} onChange={(e) => { setText(e.target.value) }}
                onKeyPress={(e) => {
                    if (e.key == 'Enter' && !e.shiftKey) {
                        setMessages([
                            ...messages,
                            { text, date: new Date().toLocaleString() }
                        ])
                        sendMessage(text, activeChat)
                        setText('')
                        e.preventDefault();
                        e.stopPropagation();
                    }
                }}
                style={{
                    flexGrow: 1,
                    height: 70,
                    outline: 'none',
                    padding: 5,
                    boxSizing: 'border-box',
                    resize: 'none',
                    border: '1px solid gray',
                    fontSize: '1rem',
                    marginLeft: 10,
                    backgroundColor: 'white',
                }} name="" id="" value={text} placeholder='Escribe mensaje...'></textarea>
            <button disabled={!activeChat} onClick={() => {
                setMessages([
                    ...messages,
                    { text, date: new Date().toLocaleString() }
                ])
                sendMessage(text, activeChat)
                setText('')
            }} style={{
                width: 100,
                height: 70,
                border: 'none',
                color: '#815ae6',
                outline: 'none',
                fontSize: '2rem',
                backgroundColor: 'white'
            }} type="submit">  <IoIosPaperPlane /></button>

        </div>
    </div>
}


function getUsername(chats, activeChat, message) {
    const chat = chats.find(c => c.ID == activeChat)
    const author = chat.members.find(m => m.ID == message.author)
    return author && author.name
}