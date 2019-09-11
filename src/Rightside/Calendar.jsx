import React, { useState } from 'reactn';
import Calendar from 'react-calendar';


export function CalendarZone() {
    const [open, setOpen] = useState(false)

    return <div style={{ width: '100%' }}>
        <div onClick={() => {
            setOpen(!open)
            console.log(open);
        }} style={{ width: '100%', padding: 6, backgroundColor: 'white', color: '#2e0696' }}>
            Calendario
        </div>
        {open && <Calendar />}
    </div>
}