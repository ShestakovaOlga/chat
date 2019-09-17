import { setGlobal } from 'reactn'

const host = 'https://chat.galax.be'
//const host = 'http://192.168.1.10:8081'

export function sendMessage(message, ID) {  //mandar los mensajes
    fetch(`${host}/newmessage?id=${ID}`, {
        credentials: "include",
        method: 'POST',
        body: JSON.stringify({
            text: message,
        }),
        headers: {
            'Content-type': 'application/json',
            origin: window.location.host
        }
    })
}

export async function getMessages(ID) {
    const res = await fetch(`${host}/messages?id=${ID}`, { credentials: "include", origin: window.location.host })
    const data = await res.json()
    if (data) setGlobal({ messages: data })
}


export async function sendSignup(name, email, password, avatar) { //registrarse
    try {
        await fetch(`${host}/newuser`, {
            credentials: "include",
            method: 'POST',
            body: JSON.stringify({
                name,
                email,
                password,
                avatar
            }),
            headers: {
                'Content-type': 'application/json',
                origin: window.location.host
            }
        })
        console.log('user was created');

    } catch (er) {
        console.log(er);
    }
}

export async function login(email, password) { //abrir la sesion
    const ids = await OneSignal.getIdsAvailable()
    const res = await fetch(`${host}/login`, {
        credentials: "include",
        method: 'POST',
        body: JSON.stringify({
            email,
            password,
            pushToken: ids.userId
        }),
        headers: {
            'Content-type': 'application/json',
            origin: window.location.host
        }
    })
    if (res.ok) {
        setGlobal({
            logged: true
        })
    }
}


export async function Checklogin() {  //mantener la sesion abierta
    const res = await fetch(`${host}/logged`, {
        credentials: "include",
        headers: {
            origin: window.location.host
        }
    })

    if (res.ok) {
        setGlobal({
            logged: true
        })
    }

}


export async function Logout() {  //cerrar la sesion
    const res = await fetch(`${host}/logout`, {
        credentials: "include",
        headers: {
            origin: window.location.host
        }
    })
    if (res.ok) {
        setGlobal({
            logged: false
        })
    }
}


export async function Users() {  //los usuarios 
    const res = await fetch(`${host}/users`, {
        credentials: "include",
        headers: {
            origin: window.location.host
        }
    })
    const users = await res.json()
    console.log({ users });

    setGlobal({
        users
    })
}


export async function CreateGroup(name, members) { //crear un grupo
    try {
        await fetch(`${host}/newchat`, {
            credentials: "include",
            method: 'POST',
            body: JSON.stringify({
                name: name,
                members: members
            }),
            headers: {
                'Content-type': 'application/json',
                origin: window.location.host
            }
        })
        console.log('chat was created');
        getChats()

    } catch (er) {
        console.log(er);
    }
}

export async function getChats() {  //traerse los chats
    const res = await fetch(`${host}/chats`, {
        credentials: "include",
        headers: {
            origin: window.location.protocol + '//' + window.location.host,
            'Content-Type': 'application/json'
        }
    })
    try {
        const chats = await res.json()
        console.log({ chats });
        setGlobal({
            chats
        })
    } catch (e) {
        console.log(e);

    }
}


export async function getMe() {  //traer los datos del usuario
    const res = await fetch(`${host}/me`, {
        credentials: "include",
        headers: {
            origin: window.location.host
        }
    })
    try {
        const me = await res.json()
        console.log({ me });
        setGlobal({
            me
        })
    } catch (e) {
        console.log(e);

    }
}

export async function avatar(avatar) { //mandar avatar
    try {
        await fetch(`${host}/avatar`, {
            credentials: "include",
            method: 'POST',
            body: JSON.stringify({
                avatar
            }),
            headers: {
                'Content-type': 'application/json',
                origin: window.location.host
            }
        })
        console.log('avatar was send');

    } catch (er) {
        console.log(er);
    }
}


