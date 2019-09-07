import React, { useEffect, useGlobal } from 'reactn';
import { GetChats, getMessages } from '../server';
import { Menu } from './Menu';
import { SelectContacts } from './SelectContacts';
import { ChatList } from './ChatList'

export function MainLeft() {
    const [showContacts] = useGlobal('showContacts')

    return <div style={{
        height: '100%',
        width: 350,
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #E1E1E8 ',
        fontFamily: "'Roboto', sans-serif",
    }}>
        <Menu />
        {showContacts ? <SelectContacts /> : <ChatList />}
    </div>
}