import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import PhoneInput from "react-phone-input-2";
import * as Yup from "yup";
import apiGetService from "../../services/apiGetService";
import InputField from "../SignupForm/InputField";

const UpdateformOrganization = () => {
  const extensions = new RegExp(/.jpg|.jpeg|.png/i);

  const [
    { address, name, image, facebook, instagram, linkedin, phone },
    setOrganizationState,
  ] = useState({
    address: "",
    name: "",
    image: "",
    facebook: "",
    instagram: "",
    linkedin: "",
    phone: "",
  });
  const [register, setRegister] = useState(false);
  const [fieldempty, setFieldempty] = useState(false);
  const [typeimage, setTypeimage] = useState(false);

  const initialValues = {
    address: "",
    name: "",
    image: "",
    phone: "",
    facebook: "",
    instagram: "",
    linkedin: "",
  };

  //Info organization
  useEffect(() => {
    (async () => {
      const { address, name, image, phone, socialmedia } = await apiGetService(
        "organizations/public"
      );
      const { facebook, instagram, linkedin } = socialmedia;

      setOrganizationState({
        address,
        name,
        image,
        facebook,
        instagram,
        linkedin,
        phone,
      });
    })();
  }, []);

  const validationSchema = Yup.object({
    name: Yup.string().min(
      3,
      "Debe contener mínimo 3 caracteres"
    ),
    phone: Yup.number().min(
      3,
      "Debe ser un número de teléfono válido"
    ),

    address: Yup.string().min(
      3,
      "Debe contener mínimo 3 caracteres"
    ),
    facebook: Yup.string().url(
      "Debe ser una url válida"
    ),
    linkedin:Yup.string().url(
      "Debe ser una url válida"
    ),
    instagram: Yup.string().url(
      "Debe ser una url válida"
    ),
  });

  const onSubmit = (data) => {
    //validate that at least one field is full
    if (data.name.length > 0 || data.image.lengt > 0) {
      console.log(data);
      setTypeimage(false);

      //Information by default that would be in the database
      if (!data.name.length > 0) {
        data.name = "Default information name";
      } else {
        if (data.image.length > 0) {
          if (extensions.test(data.image)) {
            //correct data
            /*
                const organization = async () => {
                const infoorganization = await apiGetService('updateorganization');
                setRegister(true)
             };*/
          } else {
            setTypeimage(true);
          }
        }
      }
    }
    //Empty fields
    else {
      console.log("vacios");
      setFieldempty(true);
    }
    console.log(data);
  };

  return (
    <div className="row g-5 form-contacto">
      <div className="col-md-10 col-lg-10 pt-md-5">
        <h2>Información de la organización</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <div className="row g-3">
              <div className="col-sm-6">
                <InputField
                  label="Nombre de la organización"
                  name="name"
                  type="text"
                />
              </div>
              <div className="col-sm-6">
                <InputField label="Dirección" name="address" type="text" />
              </div>

              <div className="col-sm-6">
                <InputField
                  label="Logo"
                  name="image"
                  type="file"
                  placeholder="..."
                />
              </div>

              <div className="col-sm-6">
                <div className="form-floating mt-4">
                  <PhoneInput
                    name="phone"
                    country="ar"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <InputField label="Facebook" name="facebook" type="text" />
              </div>
              <div className="col-sm-6">
                <InputField label="Instagram" name="instagram" type="text" />
              </div>
              <div className="col-sm-6">
                <InputField label="Linkedin" name="linkedin" type="text" />
              </div>
              <div className="col-sm-12">
                <Field
                  as="textarea"
                  rows="4"
                  className="form-control"
                  id="message"
                  name="message"
                />
              </div>
              {typeimage ? "the file must be of type jpg, jpeg, png" : ""}
            </div>
            <br />
            <button type="submit" className="btn btn-secondary">
              Actualizar
            </button>
          </Form>
        </Formik>
        {register ? "Successful registered organization information" : ""}
        {fieldempty ? "Fields cannot be empty" : ""}
        <hr></hr>
      </div>
    </div>
  );
};

export default UpdateformOrganization;
