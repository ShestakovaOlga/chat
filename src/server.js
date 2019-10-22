import { setGlobal, getGlobal } from 'reactn'
import swal from 'sweetalert';


//mandar un mensaje nuevo
export function sendMessage(message, ID) {
    socket.send(JSON.stringify({
        command: 'newmessage',
        payload: {
            text: message,
            chatID: ID
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

//sacar los contactos
export function Users() {
    socket.send(JSON.stringify({
        command: 'users'
    }));
}

//recebir mensajes
// export async function getMessages(ID) {
//     socket.send(JSON.stringify({
//         command: 'messages',
//         payload: {
//             ID
//         }
//     }));
// const res = await fetch(`${host}/messages?id=${ID}`, {
//     credentials: "include",
//     origin: window.location.host
// })
// const data = await res.json()
// if (data) setGlobal({ messages: data })
//}

//iniciar sesion
export async function login(email, password) {
    console.log('login');

    let ids = {}
    socket.send(JSON.stringify({
        command: 'login',
        payload: {
            email: email,
            password: password,
            pushToken: ids.userId
        }
    }));
    console.log('after socket send');

    // try {
    //     ids = await OneSignal.getUserId()
    // } catch (e) {
    //     console.log(e);
    // }
    // console.log('after ids');


}

//registrarse
export async function sendSignup(name, email, password, avatar) {
    socket.send(JSON.stringify({
        command: 'newuser',
        payload: {
            name: name,
            email: email,
            password: password,
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
    localStorage.removeItem('token')
    window.location.reload()
}

export async function CreateGroup(name, members) { //crear un grupo
    socket.send(JSON.stringify({
        command: 'newchat',
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

export async function chatRead(ID) {
    socket.send(JSON.stringify({
        command: 'chatread',
        payload: {
            ID
        },
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


//const ws = 'ws://192.168.1.10:8081/ws'
const ws = 'wss://chat.galax.be/ws'


// Crea una nueva conexión.
const socket = new WebSocket(ws);

// Abre la conexión
socket.addEventListener('open', async function (event) {
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
            setGlobal({
                logged: true
            })
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
            console.log('me', msg.payload.me);
            setGlobal({
                me: msg.payload.me
            })
            break;
        case 'chats': console.log('chats', msg.payload.chats);
            setGlobal({
                chats: msg.payload.chats
            })
            break;
        case 'logout':
            setGlobal({
                logged: false
            })
            break;
        case 'notification':
            swal(msg.payload.msg, '', msg.payload.isError ? "error" : "success");
            // msg.payload.isError
            break;
        case 'notifications':
            const n = msg.payload.notifications.filter(n => !n.read)
            setGlobal({
                notifications: n.length ? n.reduce((res, n) => {
                    res[n.chat] ? res[n.chat] += 1 : res[n.chat] = 1
                    return res
                }, {}) : []
            })
            break;
        case 'message':
            const g = getGlobal()
            const chat = g.chats.find(chat => chat.ID === msg.payload.message.chatID)
            if (chat) {
                chat.Messages.push(msg.payload.message)
            }
            setGlobal({
                chats: [...g.chats.filter(chat => chat.ID !== msg.payload.message.chatID), chat],
                // notifications: {
                //     [chat.ID]: g.notifications[chat.ID] ? g.notifications[chat.ID] + 1 : 1
                // }
            })
            break;
    }
}

