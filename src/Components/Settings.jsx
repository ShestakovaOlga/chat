import React, { useState, useGlobal } from 'reactn'
import { IoIosArrowBack } from "react-icons/io";
import '../css/settings.css'
import { Selectimg } from '../Rightside/Selectimg'

export function Settings(props) {
    const [showSettings, setShowSettings] = useGlobal('showSettings')
    const [img, setImg] = useState(null)
    const [mode] = useGlobal('mode')

    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        backgroundColor: 'white',
        flex: 1,
        fontFamily: "'Roboto', sans-serif",
        overflowY: 'scroll',
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
            right: -11,
            margin: '-5px 0px',
        } : {}
    }}>
        <button style={{
            color: '#2e0696',
            fontSize: '1.2rem',
            outline: 'none',
            backgroundColor: 'white',
            border: 'none',
            width: 30,
            marginTop: 10,
        }}
            onClick={() => {
                setShowSettings(false)
            }}><IoIosArrowBack /></button>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <label htmlFor="">Cambiar el nombre</label>
            <input type="text" id='inputS' placeholder="Nombre" />

            <label htmlFor="">Cambiar el email</label>
            <input type="email" id='inputS' placeholder="Email" />

            <label htmlFor="">Nombre de la empresa</label>
            <input type="text" id='inputS' placeholder="Empresa" />
            {<button style={{
                padding: 6,
                cursor: 'pointer',
                borderRadius: '40px',
                width: '90%',
                border: 'none',
                backgroundColor: '#815ae6',
                color: 'white',
                outline: 'none',
                fontSize: '1rem',
                fontFamily: "'Lexend Deca', sans-serif",
                margin: '20px 30px',
                ...mode === 'phone' ? {
                    height: 40,
                    borderRadius: '20px',
                } : {},
            }}>Guardar los cambios</button>}
            <Selectimg onChange={(i) => {
                setImg(i)
            }} value={img} />

            <span style={{ margin: '50px 0 15px 0' }}>Cambiar la contraseña</span>
            <input type="password" name="" id='inputS' placeholder="Nueva contraseña" />
            <input type="password" name="" id='inputS' placeholder="Confirmar nueva contraseña" />
            <input type="password" name="" id='inputS' placeholder="Antigua contraseña" />
        </div>
        {<button style={{
            padding: 6,
            cursor: 'pointer',
            borderRadius: '40px',
            border: 'none',
            backgroundColor: '#815ae6',
            color: 'white',
            outline: 'none',
            fontSize: '1rem',
            fontFamily: "'Lexend Deca', sans-serif",
            margin: '30px 20px',
            ...mode === 'phone' ? {
                padding: 'none',
                height: 50,
                borderRadius: '20px',
                margin: '20px',
            } : {},
        }}>Guardar nueva contraseña</button>}
    </div>
}