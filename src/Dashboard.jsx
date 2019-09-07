import React, { useEffect, useGlobal } from 'reactn';
import { MainLeft } from './Leftside/index';
import { Center } from './Center'
import { InfoPanel } from './Rigthside/index'
import { Checklogin } from './server';
import { withRouter } from 'react-router-dom';


function Dashboard(props) {
    const [logged] = useGlobal('logged')
    if (!logged) {
        Checklogin()
        props.history.push('/')
    }
    return <div style={{
        display: 'flex',
        height: '100%'
    }}>
        <MainLeft />
        <Center />
        <InfoPanel />
    </div>
}
export default withRouter(Dashboard)