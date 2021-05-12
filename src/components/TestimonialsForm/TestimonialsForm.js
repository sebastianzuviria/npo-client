import React, { useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './FormStyles.css';

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

  console.log(newContent);

  return (
    <div>
      <h1>{formTitle}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type='text'
            value={newName}
            onChange={({ target }) => {
              setNewName(target.value);
            }}
          />
        </label>
        <label>
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
        <button type='submit'> {isEdit ? 'Edit' : 'Create'} </button>
      </form>
    </div>
  );
};

export default TestimonialsForm;
