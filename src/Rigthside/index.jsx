import React, { useState, useGlobal } from 'reactn';
import { Menu } from './Menu'


export function InfoPanel() {
    return <div style={{
        border: '1px solid #E1E1E8',
        width: 500,
        height: '100%'
    }}>
        <Menu />
        Info Panel
</div>
}