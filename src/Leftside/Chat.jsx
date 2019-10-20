import React, { useGlobal } from 'reactn';
import { IoMdPerson } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { chatRead } from '../server';



export function Chat({ chat, notifications }) {
    const [activeChat, setActiveChat] = useGlobal('activeChat')
    const [chats] = useGlobal('chats')
    const [gnotifications, setGnotifications] = useGlobal('notifications')


    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        borderRight: '1px solid #E1E1E8',
        overflowY: 'scroll',
        width: '100%',
        fontFamily: "'Roboto', sans-serif",
    }}>
        <div onClick={() => {
            chatRead(chat.ID)
            setActiveChat(chat.ID)
            setGnotifications({
                ...gnotifications,
                [chat.ID]: null
            })
        }} style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: activeChat == chat.ID ? '#815ae6' : 'white',
            color: activeChat == chat.ID ? 'white' : 'black',
            // borderBottom: '1px solid #E1E1E8 ',
            cursor: 'pointer',
        }}>
            {chat.avatar ? <div style={{
                width: 50,
                height: 60,
                marginRight: 5,
            }}><img style={{ width: '100%', height: '100%' }} src={chat.avatar} alt="" /></div> : <IoMdPerson style={{
                width: 50,
                height: 50,
                marginRight: 5,
                color: activeChat == chat.ID ? 'white' : '#815ae6',
            }} />}

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                padding: 5,
            }}>{chat.name}

                <div style={{
                    color: '#BDC3C7',//gris claro
                    fontSize: '0.9rem',
                    marginTop: 5
                }}> Last date</div>
            </div>
            {activeChat !== chat.ID && notifications && <div style={{
                width: 13,
                height: 13,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid gray',
                borderRadius: 100,
                marginBottom: 2,
                fontSize: '0.8rem'
            }}><span>{notifications}</span></div>}
            <div style={{
                color: '#815ae6',
                fontSize: '1.2rem',
            }}><IoIosArrowForward /></div>
        </div>
    </div>
}
