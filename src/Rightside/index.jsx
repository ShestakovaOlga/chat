import React, { useState, useGlobal } from 'reactn';
import { Menu } from './Menu'


export function InfoPanel() {
    const [mode] = useGlobal('mode')
    return <div style={{
        flex: 1,
        height: '100%',
        backgroundColor: '#2e0696',
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
            width: window.innerWidth / 4 * 3,
            right: 0,
            bottom: 0,
        } : {}
    }}>

        <Menu />
        Info Panel
</div >
}