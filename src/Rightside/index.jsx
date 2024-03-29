import React, { useState, useGlobal } from 'reactn';
import { Menu } from './Menu';
import { CalendarZone } from './Calendar';
import { Selectimg } from './Selectimg'
import { Settings } from '../Components/Settings'

export function InfoPanel() {
    const [mode] = useGlobal('mode')
    const [img, setImg] = useState(null)
    const [showSelectimg, setShowSelectimg] = useGlobal('showSelectimg')
    const [showSettings, setShowSettings] = useGlobal('showSettings')

    if (showSettings) {
        return <Settings />
    }
    return <div style={{
        flex: 1,
        height: '100%',
        backgroundColor: '#fafafa',
        //backgroundColor: '#815ae6',
        // background: 'linear-gradient(to right bottom #815ae6, #543698)',
        color: 'white',
        ...mode === 'phone' ? {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
        } : {},
        ...mode === 'tablet' ? {
            position: 'absolute',
            width: window.innerWidth / 4 * 3.04,
            right: -11,
            bottom: 0,
        } : {}
    }}>
        <Menu />
        {showSelectimg ? <Selectimg onChange={(i) => {
            setImg(i)
        }} value={img} /> : false}
        <CalendarZone />
    </div >
}