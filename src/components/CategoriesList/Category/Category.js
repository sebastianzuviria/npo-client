import React from 'react';
import apiDeleteService from '../../../services/apiDeleteService';
import apiGetService from "../../../services/apiGetService";
import { successAlert ,cancelAlert, confirmAlert, errorAlert } from '../../Alert/Alert';

const Category = ({ name, id , setCategories}) => {

    const deletecategory = async()=>{

        const res = await confirmAlert();

        if(res.isConfirmed){
            try{
                await apiDeleteService('categories', id);
                    setCategories(prev=>{
                        return prev.filter((val)=>{
                           return val.id !=id
                         })
                   });
                   return await successAlert()
                }
                catch(e){
                    errorAlert();
                }
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