import React, { useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const TestimonialsForm = ({ id, name, content }) => {
  const [newName, setNewName] = useState('');
  const [newContent, setNewContent] = useState('');
  const [formTitle, setFormTitle] = useState('Create a new testimonial');
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    const verifyContent = id && name && content;
    const isContentToEdit = verifyContent ? true : false;
    if (isContentToEdit) {
      setIsEdit(true);
      setNewName(name);
      setNewContent(content);
      setFormTitle('Edit a testimonial');
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const testimonialsObject = {
      newName,
      newContent,
    };

    try {
      if (isEdit) {
        console.log(testimonialsObject, 'Testimonial edited');
      } else {
        console.log(testimonialsObject, 'Testimonial created');
      }
    } catch (error) {
      console.log({ error: error.message });
    }
  };

  return (
    <div className='container-fluid'>
      <div className='row align-items-center justify-content-center pb-3'>
        <h3 className='text-center pt-2'>{formTitle}</h3>
        <form className='card shadow col-sm-6 pb-3' onSubmit={handleSubmit}>
          <label className='text-center form-control pb-3'>
            Name
            <input
              className='form-control'
              type='text'
              value={newName}
              onChange={({ target }) => {
                setNewName(target.value);
              }}
              required
            />
          </label>
          <label className='text-center form-control pb-3'>
            Content
            <CKEditor
              editor={ClassicEditor}
              data={newContent}
              onChange={(e, editor) => {
                const data = editor.getData();
                setNewContent(data);
              }}
            />
          </label>
          <button
            type='submit'
            className='btn btn-outline-dark col-6 btn-block'
          >
            {isEdit ? 'Edit' : 'Create'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TestimonialsForm;
