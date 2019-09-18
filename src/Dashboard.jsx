import React, { useEffect, useGlobal } from 'reactn';
import { MainLeft } from './Leftside/index';
import { Center } from './Center';
import { InfoPanel } from './Rightside/index';
import { withRouter } from 'react-router-dom';


function Dashboard(props) {
    const [logged] = useGlobal('logged')
    const [mode] = useGlobal('mode')
    const [activeChat, setActiveChat] = useGlobal('activeChat')
    const [showMenu, setShowMenu] = useGlobal('showMenu')

    if (!logged) {
        props.history.push('/')
    }
    if (mode === 'tablet') {
        return <div style={{
            display: 'flex',
            height: '100%'
        }}>
            <MainLeft />
            <Center />
            {showMenu && <InfoPanel />}
        </div>
    }
    if (mode === 'phone') {
        return <div style={{
            display: 'flex',
            height: '100%'
        }}>
            {!activeChat && <MainLeft />}
            {activeChat && <Center />}
            {showMenu && <InfoPanel />}
        </div>
    }
    if (mode === 'pc') {
        return <div style={{
            display: 'flex',
            height: '100%'
        }}>
            <MainLeft />
            <Center />
            <InfoPanel />
        </div>
    }
}
export default withRouter(Dashboard)