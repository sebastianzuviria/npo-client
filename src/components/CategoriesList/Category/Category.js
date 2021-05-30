import React, {useState} from "react";
import apiDeleteService from "../../../services/apiDeleteService";
import apiUpdateService from "../../../services/apiUpdateService";
import { successAlert, cancelAlert, confirmAlert, errorAlert,} from "../../Alert/Alert";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import {Modal, Button} from 'react-bootstrap';

const Category = ({ name, description, id, setCategories }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const initialValues = {
    	name: name,
    	description:description
    };

    const validationSchema=Yup.object({
        namecategory: Yup.string()
        .max(15, 'Must be 15 characters or less'),

        descriptioncategory: Yup.string()
        .max(20, 'Must be 20 characters or less')
    })


    const deletecategory = async () => {
        const res = await confirmAlert();

        if (res.isConfirmed) {
            try {
                await apiDeleteService("categories", id);
                setCategories((prev) => {
                    return prev.filter((val) => {
                        return val.id !== id;
                    });
                });
                return await successAlert();
            }catch (e) {
                    errorAlert();
            }
        } else {
            cancelAlert();
        }
    };

    const onSubmit = async(data)=>{

        try{
            await apiUpdateService("categories",id, data);
            setIsModalOpen(false);
            await successAlert();
            setCategories((prev) => {
                return prev.map((val) => {

                    return val.id === id ? {name:data.name, description:data.description}: val
                });
            });

        }
        catch(e){

            setIsModalOpen(false);
            errorAlert();

        }
 

    }

    return (
        <>
        <tr key={id}>
            <td>{name}</td>
            <td>
            <button
                type="button"
                className="btn btn-info"
                data-toggle="modal"
                data-target="#exampleModal"
                style={{ color: "white", marginRight: "5px" }}
                onClick={() => setIsModalOpen(!isModalOpen)}
            >
                <i className="fa fa-pencil" aria-hidden="true"></i>
            </button>
            <button onClick={() => deletecategory()} className="btn btn-danger">
                <i className="fa fa-trash" aria-hidden="true"></i>
            </button>
            </td>
        </tr>

        <Modal show={isModalOpen} onHide={() => setIsModalOpen(!isModalOpen)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                    >
                    <Form>
                        <label htmlFor="name">Category</label>
                        <Field name="name" type="text" />
                        <ErrorMessage name="name" />
                
                        <label htmlFor="description">Description</label>
                        <Field name="description" type="text" />
                        <ErrorMessage name="description" />

                        <button type="submit">Submit</button>
                    </Form>
                </Formik>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setIsModalOpen(!isModalOpen)}>
                        Close
                    </Button>
                </Modal.Footer>
        </Modal>
        </>
    );
};

export default Category;
