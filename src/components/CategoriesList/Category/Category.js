import React from 'react';
import './Category.css';
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
        <div className="category-container">
            <div className="category-info">
                <p className="category-info__tag">Category Name: </p>
                <p className="category-info__name">{ name }{id}</p>
            </div>
            <div className="category-actions">
                <button >Edit</button>

                <button onClick={() => deletecategory()}>Delete</button>
            </div>
        </div>
    )
}

export default Category;