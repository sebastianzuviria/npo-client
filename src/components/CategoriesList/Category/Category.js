import React, {useState} from "react";
import apiDeleteService from "../../../services/apiDeleteService";
import apiUpdateService from "../../../services/apiUpdateService";
import { successAlert, cancelAlert, confirmAlert, errorAlert,} from "../../Alert/Alert";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import {Modal, Button} from 'react-bootstrap';

const Category = ({ name, id, setCategories }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const initialValues = {
    	namecategory: name,
    	descriptioncategory: "",
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
                        return val.id != id;
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
        console.log(data);

        const info=await apiUpdateService("categories",id);
        console.log(info, 'info');

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
                onClick={handleShow}
            >
                <i className="fa fa-pencil" aria-hidden="true"></i>
            </button>
            <button onClick={() => deletecategory()} className="btn btn-danger">
                <i className="fa fa-trash" aria-hidden="true"></i>
            </button>
            </td>
        </tr>

        <Modal show={show} onHide={handleClose}>
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
                        <label htmlFor="namecategory: ">Category</label>
                        <Field name="namecategory" type="text" />
                        <ErrorMessage name="namecategory" />
                
                        <label htmlFor="descriptioncategory">Description</label>
                        <Field name="descriptioncategory" type="text" />
                        <ErrorMessage name="descriptioncategory" />

                        <button type="submit">Submit</button>
                    </Form>
                </Formik>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save 
                    </Button>
                </Modal.Footer>
        </Modal>
        </>
    );
};

export default Category;
