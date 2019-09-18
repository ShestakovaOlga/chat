import { setGlobal } from 'reactn'
import { async } from 'q';

//const host = 'https://chat.galax.be'
const host = 'http://192.168.1.10:8081'

export function sendMessage(message, ID) {  //mandar los mensajes
    socket.send(JSON.stringify({
        command: 'messages',
        payload: {
            message,
            ID
        }
    }));
    // fetch(`${host}/newmessage?id=${ID}`, {
    //     credentials: "include",
    //     method: 'POST',
    //     body: JSON.stringify({
    //         text: message,
    //     }),
    //     headers: {
    //         'Content-type': 'application/json',
    //         origin: window.location.host
    //     }
    // })
}
export function Users() {
    socket.send(JSON.stringify({
        command: 'users'
    }));
}

export async function getMessages(ID) {
    const res = await fetch(`${host}/messages?id=${ID}`, {
        credentials: "include",
        origin: window.location.host
    })
    const data = await res.json()
    if (data) setGlobal({ messages: data })
}


export async function sendSignup(name, email, password, avatar) { //registrarse
    socket.send(JSON.stringify({
        command: 'signup',
        payload: {
            name,
            email,
            password,
            avatar
        }
    }));
    // try {
    //     await fetch(`${host}/newuser`, {
    //         credentials: "include",
    //         method: 'POST',
    //         body: JSON.stringify({
    //             name,
    //             email,
    //             password,
    //             avatar
    //         }),
    //         headers: {
    //             'Content-type': 'application/json',
    //             origin: window.location.host
    //         }
    //     })
    //     console.log('user was created');

    // } catch (er) {
    //     console.log(er);
    // }
}


export async function Logout() {  //cerrar la sesion
    socket.send(JSON.stringify({
        command: 'logout',
    }));
}

export async function CreateGroup(name, members) { //crear un grupo
    socket.send(JSON.stringify({
        command: 'name',
        payload: {
            name: name,
            members: members
        }
    }));
    // try {
    //     await fetch(`${host}/newchat`, {
    //         credentials: "include",
    //         method: 'POST',
    //         body: JSON.stringify({
    //             name: name,
    //             members: members
    //         }),
    //         headers: {
    //             'Content-type': 'application/json',
    //             origin: window.location.host
    //         }
    //     })
    //     console.log('chat was created');
    //     getChats()

    // } catch (er) {
    //     console.log(er);
    // }
}

export async function getChats() {  //traerse los chats
    socket.send(JSON.stringify({
        command: 'chats',
    }));
}


export async function getMe() {  //traer los datos del usuario
    socket.send(JSON.stringify({
        command: 'me',
    }));
}

export async function avatar(avatar) { //mandar avatar
    socket.send(JSON.stringify({
        command: 'avatar',
        payload: {
            avatar
        }
    }));
}


const ws = 'ws://192.168.1.10:8081/ws'
//const ws = 'wss://chat.galax.be/ws'


// Crea una nueva conexión.
const socket = new WebSocket(ws);

// Abre la conexión
socket.addEventListener('open', async function (event) {
    let ids = {}
    try {
        ids = await OneSignal.getIdsAvailable()
    } catch (e) {
        console.log(e);

    }
    socket.send(JSON.stringify({
        command: 'jwt',
        payload: {
            token: localStorage.getItem('token')
        }
    }));
    // socket.send(JSON.stringify({
    //     command: 'login',
    //     payload: {
    //         email: 'olga@olga.com',
    //         password: 'olga',
    //         pushToken: ids.userId
    //     }
    // }));
});

// Escucha por mensajes
socket.addEventListener('message', function (event) {
    console.log('Message from server', event.data);
    gotServerMessage(JSON.parse(event.data))
});

function gotServerMessage(msg) {    //servidor manda los mensajes
    switch (msg.command) {
        case 'jwt': console.log('jwt', msg.payload);
            localStorage.setItem('token', msg.payload.token)
            break;
        case 'users': console.log('users', msg.payload);
            setGlobal({
                users: msg.payload.users
            })
            break;
        case 'check': console.log('check', msg.payload);
            setGlobal({
                logged: true
            })
            break;
        case 'me':
            setGlobal({
                me: msg.payload.me
            })
            break;
        case 'chats':
            setGlobal({
                chats: msg.payload.chats
            })
            break;
        case 'logout':
            setGlobal({
                logged: false
            })
            break;
    }
}

