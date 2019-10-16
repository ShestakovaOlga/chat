import React, { useState } from 'reactn';
import Calendar from 'react-calendar';
import '../css/style';
import { IoMdCalendar } from "react-icons/io";


export function CalendarZone() {
    const [open, setOpen] = useState(false)

    return <div style={{
        width: '100%',
        borderBottom: '1px solid #2e0696',
    }}>
        <div onClick={() => {
            setOpen(!open)
            console.log(open);
        }} style={{
            width: '100%',
            padding: 6,
            color: '#815ae6',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
        }}>
            <IoMdCalendar style={{ fontSize: '1.2rem', marginRight: 5 }} />
            <span>Calendario</span>
        </div>
        {open && <Calendar style={{ width: '100% !important' }} />}
    </div>
}