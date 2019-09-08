import React, { useState, useGlobal } from 'reactn';
import { Menu } from './Menu'


export function InfoPanel() {
    const [mode] = useGlobal('mode')
    return <div style={{
        border: '1px solid #E1E1E8',
        flex: 1,
        height: '100%',
        ...mode === 'phone' ? {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'white'
        } : {},
        ...mode === 'tablet' ? {

        } : {}
    }}>

        <Menu />
        Info Panel
</div >
}