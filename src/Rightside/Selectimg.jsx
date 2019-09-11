import React, { useState, useRef, useEffect } from 'react'



export function Selectimg({ onChange, value }) {
    return <div style={{
        width: 200,
        height: 200,
        backgroundColor: 'white',
        boxShadow: '3px 10px 29px -6px gray',
    }}>
        <input onChange={(e) => {
            const fr = new FileReader();
            fr.onload = function () {
                onChange(fr.result)
            }
            fr.readAsDataURL(e.target.files[0]);
        }} type="file" name="photo" id="img-select" />

        {value && <img src={value} alt="" />}
    </div>
}