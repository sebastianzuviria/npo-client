import React from 'react'
import Form from './Form'
const FormContent = () => {
    const category={
        id:1,
        name:'Nombre de categoria',
        description:'<h2>Titulo</h2><p>Parrafo</p>'
    }
    return (
        <div>
            <Form category='' />
        </div>
    )
}

export default FormContent
