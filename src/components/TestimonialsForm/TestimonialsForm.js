import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import apiPostService from '../../services/apiPostService';
import { errorAlert, successAlert } from '../Alert/Alert';

const TestimonialsForm = () => {
  const [newName, setNewName] = useState('');
  const [newContent, setNewContent] = useState('');

  //in case there is no content, the error alert pops up, otherwise the success alert does
  const handleSubmit = async (e) => {
    e.preventDefault();

    const testimonialsObject = {
      name: newName,
      content: newContent,
    };
    try {
      await apiPostService(
        'testimonials',
        testimonialsObject
      );
      await successAlert();
    } catch (error) {
      await errorAlert();
      console.log({ error: error.message });
    }
  };

  return (
    <div className='container-fluid pt-2'>
      <div className='row align-items-center justify-content-center vw-10 mx-auto pb-3'>
        <h3 className='text-center pt-2'>Crear nuevo testimonio</h3>
        <form
          className='card shadow col-md-6 col-lg-6 pb-3'
          onSubmit={handleSubmit}
        >
          <label className='text-center pt-2'>
            Nombre
            <div className='pt-1'>
              <input
                className='form-control'
                type='text'
                value={newName}
                onChange={({ target }) => {
                  setNewName(target.value);
                }}
                required
              />
            </div>
          </label>
          <div className='pt-3'>
            <label className='form-control text-center pb-3'>
              Contenido
              <CKEditor
                editor={ClassicEditor}
                data={newContent}
                onChange={(e, editor) => {
                  const data = editor.getData();
                  setNewContent(data);
                }}
              />
            </label>
          </div>

          <div className='d-grid gap-2 col-6 mx-auto pt-3'>
            <button type='submit' className='btn btn-outline-dark btn-block'>
              Crear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TestimonialsForm;
