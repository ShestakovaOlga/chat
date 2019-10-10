import React, { useState, useGlobal, useRef } from 'reactn';
import { IoIosPaperPlane } from "react-icons/io";
import { sendMessage } from '../server';
import { useEffect } from 'react';
import { IoMdPerson, IoIosCloseCircle } from "react-icons/io";
import { Menu } from './Menu';
import { EmojiList } from '../Components/EmojiList'




export function Center(props) {
    const [text, setText] = useGlobal('text')
    const [activeChat, setActiveChat] = useGlobal('activeChat')
    const [chats] = useGlobal('chats')
    const scroll = useRef(null)
    const [showMessage, setShowMessage] = useGlobal('showMessage')
    const [users] = useGlobal('users')
    const [me] = useGlobal('me')
    const [mode] = useGlobal('mode')
    const [emojiActive, setemojiActive] = useGlobal('emojiActive')

    //Hacer scroll hacia abajo en los mensajes
    useEffect(() => {
        scroll.current.scrollTo(0, scroll.current.scrollHeight)
        setText('')
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
            {chats.find(m => m.ID === activeChat) && chats.find(m => m.ID === activeChat).Messages.map((message) => <div key={message.text + message.CreatedAt} style={{
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
                    }}><img style={{ width: '100%', height: '100%' }}
                        src={[...users, me].find((u) => u.ID == message.author).avatar} alt="" /></div> : <IoMdPerson style={{
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
            height: 90,
            display: 'flex',
            alignItems: 'center',
            borderTop: '1px solid #BDC3C7',
        }}>
            <textarea onChange={(e) => { setText(e.target.value) }}
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
                    padding: 7,
                    boxSizing: 'border-box',
                    resize: 'none',
                    border: '1px solid #BDC3C7',
                    borderRadius: 15,
                    fontSize: '0.8rem',
                    marginLeft: 10,
                    backgroundColor: 'white',
                    ...mode === 'phone' ? {
                        height: '30px',
                        borderRadius: 10,
                        padding: 5,
                        marginLeft: 0,
                    } : {},
                }} name="" id="" value={text} placeholder='Escribe mensaje...'></textarea>
            {emojiActive && <button style={{
                width: 30,
                height: 30,
                backgroundColor: 'white',
                textAlign: 'center',
                marginLeft: 5,
                fontSize: '1.3rem',
                border: 'none',
                outline: 'none',
                color: '#815ae6',
            }} onClick={() => {
                setemojiActive(false)
            }}><IoIosCloseCircle /></button>}
            <EmojiList />
            <button disabled={!activeChat} onClick={() => {
                sendMessage(text, activeChat)
                setText('')
            }} style={{
                width: 30,
                height: 30,
                border: 'none',
                color: '#815ae6',
                outline: 'none',
                fontSize: '1.5rem',
                backgroundColor: 'white',
                marginLeft: 5,
                padding: 0,
                ...mode === 'phone' ? {
                    fontSize: '1rem',
                    width: 'none',
                    marginRight: 10,
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