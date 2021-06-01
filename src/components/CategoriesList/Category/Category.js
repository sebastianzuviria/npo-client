import React, { useState, useEffect } from "react";
import apiDeleteService from "../../../services/apiDeleteService";
import apiUpdateService from "../../../services/apiUpdateService";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import {
  successAlert,
  cancelAlert,
  confirmAlert,
  errorAlert,
} from "../../Alert/Alert";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { Modal, Button } from "react-bootstrap";

const Category = ({ name, description, id, setCategories }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nameform, setNameform] = useState("");
  const [contentform, setContentform] = useState("");

  useEffect(() => {
    (async () => {
      setNameform(name);
      setContentform(description);
    })();
  }, []);

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
      } catch (e) {
        errorAlert();
      }
    } else {
      cancelAlert();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: nameform,
      description: contentform,
    };
    try {
      await apiUpdateService("categories", id, data);

      setNameform("");
      setContentform("");

      setIsModalOpen(false);
      await successAlert();
      setCategories((prev) => {
        return prev.map((val) => {
          return val.id === id
            ? { id, name: data.name, description: data.description }
            : val;
        });
      });
    } catch (e) {
      setIsModalOpen(false);
      errorAlert();
    }
  };

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

      <Modal size="lg" show={isModalOpen} onHide={() => setIsModalOpen(!isModalOpen)}>
        <Modal.Header closeButton>
          <Modal.Title>Editar categorías</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-center">
            <div className="form-Activites">
              <h2 className="text-center">
                Editar categoría
              </h2>
              <form onSubmit={handleSubmit}>
                <label className="content-act">
                  Name
                  <input
                    className="input-act"
                    type="text"
                    placeholder="Name"
                    value={nameform}
                    onChange={(e) => {
                      setNameform(e.target.value);
                    }}
                  />
                </label>

                <label className="content-act mt-3">
                  Content
                  <CKEditor
                    editor={ClassicEditor}
                    data={contentform}
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      setContentform(data);
                    }}
                  />
                </label>
                <div className="d-flex justify-content-center mt-3 mb-3">
                  <button className="button-activity">Update</button>
                </div>
              </form>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setIsModalOpen(!isModalOpen)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Category;
