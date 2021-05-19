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
  }, [id, name, content]);

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
      <div>
        <br />
        <h3 className='text-center'>{formTitle}</h3>
        <form className='form-control' onSubmit={handleSubmit}>
          <label className='text-center'>
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
          <label className='text-center'>
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
            className='btn btn-outline-dark btn-sm btn-block'
          >
            {isEdit ? 'Edit' : 'Create'}
          </button>
        </form>
        <br />
      </div>
    </div>
  );
};

export default TestimonialsForm;
