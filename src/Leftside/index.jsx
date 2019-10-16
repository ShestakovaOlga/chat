import React, { useEffect, useGlobal } from 'reactn';
import { GetChats } from '../server';
import { Menu } from './Menu';
import { SelectContacts } from './SelectContacts';
import { ChatList } from './ChatList'

export function MainLeft() {
    const [showContacts] = useGlobal('showContacts')

    return <div style={{
        height: '100%',
        backgroundColor: 'white', //'#7662E1',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #E1E1E8 ',
        fontFamily: "'Roboto', sans-serif",
    }}>
        <Menu />
        {showContacts ? <SelectContacts /> : <ChatList />}
    </div>
}