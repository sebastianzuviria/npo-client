import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MyTextInput from "../SignupForm/Textfield";
import apiGet from "../../services/apiGetService";

const UpdateformOrganization = () => {
  const extensions = new RegExp(/.jpg|.jpeg|.png/i);

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [register, setRegister] = useState(false);
  const [fieldempty, setFieldempty] = useState(false);
  const [typeimage, setTypeimage] = useState(false);

  const initialValues = {
    name: "",
    image: "",
  };

  //Info organization
  useEffect(() => {
    /*
      const organization = async () => {
          const infoorganization = await apiGetService('organization');
          setName(infoorganization.name);
          setImage(infoorganization.image);
      };*/
  }, []);

  const validationSchema = Yup.object({
    name: Yup.string().min(3, "organization name must be at least 3 characters"),
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
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Update organization!</h1>
      <p>{name}</p>
      <img src={image} alt="Organization logo image"></img>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form
          style={{
            display: "flex",
            flexDirection: "column",
            width: "800px",
            alignItems: "center",
          }}
        >
          <MyTextInput label="organization name" name="name" type="text" />

          <MyTextInput
            label="Logo"
            name="image"
            type="file"
            placeholder="..."
          />

          {typeimage ? "the file must be of type jpg, jpeg, png" : ""}

          <br />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
      {register ? "Successful registered organization information" : ""}
      {fieldempty ? "Fields cannot be empty" : ""}
    </div>
  );
};

export default UpdateformOrganization;
