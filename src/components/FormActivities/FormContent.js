import React,{useEffect, useState} from 'react'
import Form from './Form'
import apiGetService from '../../services/apiGetService'


const FormContent = (props) => {
    /* const activity={
        id:1,
        name:'Nombre de actividad',
        content:'<h2>Titulo</h2><p>Parrafo</p>'
    } */

    return (

        <div>
            {/* <Form activity={variable} /> */}
            <Form activity='' />
        </div>
    )
}

export default FormContent
