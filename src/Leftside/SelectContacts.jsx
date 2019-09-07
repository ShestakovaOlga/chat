import React, { useState, useEffect, useGlobal } from 'reactn';
import { Chat } from './Chat';
import { Users, CreateGroup } from '../server';
import { Contact } from './Contact'





export function SelectContacts(props) {
    const [users, setUsers] = useGlobal('users')
    const [selected, setSelected] = useState([])
    const [showContacts, setShowContacts] = useGlobal('showContacts')
    const [chatname, setChatname] = useState('')

    useEffect(() => {
        Users()
    }, [])

    useEffect(() => {
        console.log({ selected });

    }, [selected])

    const disabled = selected.length === 0 || (selected.length > 1 && chatname === '')

    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        border: '1px solid #E1E1E8 ',
    }}>

        {selected.length >= 2 && <input onChange={(e) => {
            setChatname(e.target.value)
        }} type="text" name="" id="" placeholder='Escribe el nombre del grupo' value={chatname} />}

        <button disabled={disabled} onClick={() => {
            CreateGroup(chatname === '' ? users.find((user) => user.email === selected[0]).name : chatname.name, selected)
            setShowContacts(false)
        }} style={{
            padding: 4,
            cursor: 'pointer',
            borderRadius: '40px',
            border: 'none',
            backgroundColor: disabled ? 'gray' : '#815ae6',
            color: 'white',
            outline: 'none',
            fontSize: '0.8rem',
            fontFamily: "'Lexend Deca', sans-serif",
            margin: '10px 70px'
        }}>Create group</button>

        <div style={{
            height: '100%',
            overflowY: 'scroll'
        }}>
            {users.map((user) => <Contact onChange={(e) => {
                if (e.target.checked) {
                    setSelected([
                        ...selected,
                        user.email
                    ])
                } else {
                    setSelected(selected.filter(email => email !== user.email))
                }
            }} checked={selected.includes(user.email)} name={user.name} />)}
        </div>



    </div>
}