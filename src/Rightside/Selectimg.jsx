import React, { useGlobal } from 'reactn'
import '../css/style'
import { IoIosCloudDownload, IoIosCamera } from "react-icons/io";
import { avatar } from '../server'



export function Selectimg({ onChange, value }) {
    const disabled = !value
    const [logged] = useGlobal('logged')
    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        backgroundColor: 'white',
        padding: '15px 5px'
    }}>
        <div>
            <label htmlFor="imgselect" className='imgstyle'>
                <IoIosCloudDownload className='iconoDescargar' /> Seleccionar la foto
        </label>
            <input onChange={(e) => {
                const fr = new FileReader();
                fr.onload = function () {
                    onChange(fr.result)
                }
                fr.readAsDataURL(e.target.files[0]);
            }} type="file" name="photo" id="imgselect" />

            {value && <img style={{
                width: 80,
                height: 80,
            }} src={value} alt="" />}

        </div>
        {logged ? <button onClick={() => {
            avatar()
        }} disabled={disabled} style={{
            padding: 4,
            cursor: 'pointer',
            borderRadius: '40px',
            border: 'none',
            backgroundColor: disabled ? 'gray' : '#815ae6',
            color: 'white',
            outline: 'none',
            fontSize: '0.8rem',
            fontFamily: "'Lexend Deca', sans-serif",
            margin: '5px 20px'
        }}>Guardar</button> : false}
    </div>
}