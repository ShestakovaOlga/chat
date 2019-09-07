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
    w: window.innerWidth
})

window.addEventListener('resize', () => {
    setGlobal({
        w: window.innerWidth
    })
})

setInterval(async () => {
    const g = getGlobal()
    if (g.activeChat) {
        getMessages(g.activeChat)
    }
}, 5000)

function App() {
    return <div>
        <HashRouter>
            <Container />
        </HashRouter>

    </div>
}

render(<App></App>, document.querySelector(`#app`))