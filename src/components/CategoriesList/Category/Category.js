import React from 'react';
import apiDeleteService from '../../../services/apiDeleteService';
import { successAlert ,cancelAlert, confirmAlert } from '../../Alert/Alert';

const Category = ({ name, id }) => {

    const deletecategory = async()=>{

        const res = await confirmAlert();

        if(res.isConfirmed){

            (async () => {


                await apiDeleteService('categories', id);
                return successAlert().then(()=>{
                    window.location.reload();
                })
            }) ();

        }
        else{
            cancelAlert();
        }

    }


    return (

        <tr key={id}>
            <td>{name}</td>
            <td>
                <button
                    
                    type="button"
                    className="btn btn-info"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    style={{ color: "white", marginRight: "5px" }}
                >
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                </button>
                <button
                    onClick={() => deletecategory()}
                    className="btn btn-danger"
                >
                    <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
            </td>
        </tr>


    )
}

export default Category;