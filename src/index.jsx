import { Container } from './Container';
import React, { useState, setGlobal, getGlobal } from 'reactn';
import { render } from "react-dom";
import { HashRouter } from 'react-router-dom';
import { getMessages } from './server'

setGlobal({
    logged: false,
    users: [],
    showContacts: false,
    chats: [],
    activeChat: null,
    messages: [],
    showMenu: false,
    showGroups: true,
    showMessage: false,
    w: window.innerWidth,
    mode: 'pc',
    me: null,
    showSelectimg: false,
    showSettings: false
})
onresize()
window.addEventListener('resize', onresize)
function onresize() {
    const w = window.innerWidth
    let mode = ''
    if (w > 1200) {
        mode = 'pc'
    } else if (w > 760) {
        mode = 'tablet'
    } else {
        mode = 'phone'
    }
    setGlobal({
        mode
    })
}


function App() {
    return <div>
        <HashRouter>
            <Container />
        </HashRouter>

    </div>
}

render(<App></App>, document.querySelector(`#app`))