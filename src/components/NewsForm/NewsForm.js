<<<<<<< HEAD
import './NewsForm.css';
import React, { useState, useEffect } from 'react';
=======
import './NewsForm.css'
import React, { useState, useEffect } from 'react'
>>>>>>> 9fab09828704fd6c544e3ab61da2aee6ae31a910
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const allCategories = [ 
    { value: 'category 1', label: 'Category 1'},
    { value: 'category 2', label: 'Category 2'},
    { value: 'category 3', label: 'Category 3'}
];

const NewsForm = ({ id, title, image, category, content }) => {
    const [newTitle, setNewTitle] = useState('');
    const [newImage, setNewImage] = useState('');
    const [newContent, setNewContent] = useState('');
    const [newCategory, setNewCategory] = useState('');
    const [isEdit, setIsEdit] = useState(false);
    const [titleOfForm, setTitleOfForm] = useState('Create a New');  

    useEffect(() => {
        const verifyContent = id && title && image && category && content;
        const isContentToEdit = (verifyContent) ? true : false;
        if (isContentToEdit) {
            setIsEdit(true); 
            setNewTitle(title);
            setNewImage(image);
            setNewCategory(category);
            setNewContent(content);
            setTitleOfForm('Edit a New');
        }
    },[id, title, image, category, content]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newsObject = {
            newTitle,
            newImage,
            newCategory,
            newContent
        };

        try {
            if (isEdit) {
                //const editedNew = await newsService.editNew(id, newsObject);
                console.log(newsObject, 'edited New');
            } else {
                //const createdNew = await newsService.createNew(newObject);
                console.log(newsObject, 'created New');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h2>{titleOfForm}</h2>
            <form style={{ display: 'flex', flexDirection: 'column'}} onSubmit={handleSubmit}>
                <label>
                    Title
                    <input 
                        type='text'
                        value={newTitle}
                        onChange={({target}) => { setNewTitle(target.value) }}
                    />
                </label>
                <label>
                    Image
                    <input 
                        type='text'
                        value={newImage}
                        onChange={({target}) => { setNewImage(target.value) }}
                    />
                </label>
                <label>
                    Category
                    <select
                        value={newCategory}
                        onChange={({ target }) => setNewCategory(target.value)}
                    >
                        <option value=''>Select</option>
                        {allCategories.map(c => 
                            <option key={c.value} value={c.value}>{c.label}</option>
                        )}
                    </select>
                </label>
                <label>
                    Content
                    <CKEditor
                        editor={ ClassicEditor }
                        data={newContent}
                        onChange={ ( event, editor ) => {
                            const data = editor.getData();
                            setNewContent(data)
                        } }
                    />
                </label>
                <button type='submit'>{isEdit ? 'Edit' : 'Create'}</button>
            </form>
        </div>
    );
};

export default NewsForm;