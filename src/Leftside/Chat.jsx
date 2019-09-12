import React, { useGlobal } from 'reactn';
import { getMessages } from '../server';
import { IoMdPerson } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


export function Chat({ chat }) {
    const [activeChat, setActiveChat] = useGlobal('activeChat')
    const [chats] = useGlobal('chats')


    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #E1E1E8',
        overflowY: 'scroll',
        width: '100%',
        fontFamily: "'Roboto', sans-serif",
    }}>
        <div onClick={() => {
            setActiveChat(chat.ID)
            getMessages(chat.ID)
        }} style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: activeChat == chat.ID ? '#815ae6' : 'white',
            color: activeChat == chat.ID ? 'white' : 'black',
            borderBottom: '1px solid #E1E1E8 ',
            cursor: 'pointer',
            padding: 5,

        }}><IoMdPerson style={{
            width: 30,
            height: 30,
            marginRight: 5,
            color: activeChat == chat.ID ? 'white' : '#815ae6',
        }} />

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
            }}>{chat.name}

                <div style={{
                    color: '#BDC3C7',//gris claro
                    fontSize: '0.9rem',
                    marginTop: 5
                }}> Last date</div>
            </div>

            <div style={{
                color: '#815ae6',
                fontSize: '1.2rem',
            }}><IoIosArrowForward /></div>
        </div>
    </div>
}
