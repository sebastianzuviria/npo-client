import React, { useState, useEffect } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

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
    }

    return (
        <div>
            <h2>{titleOfForm}</h2>
            <form style={{ display: 'flex', flexDirection: 'column'}} onSubmit={handleSubmit}>
                <label>
                    title
                    <input 
                        type='text'
                        value={newTitle}
                        onChange={({target}) => { setNewTitle(target.value) }}
                    />
                </label>
                <label>
                    image
                    <input 
                        type='text'
                        value={newImage}
                        onChange={({target}) => { setNewImage(target.value) }}
                    />
                </label>
                <label>
                    category
                    <input 
                        type='text'
                        value={newCategory}
                        onChange={({target}) => { setNewCategory(target.value) }}
                    />
                </label>
                <label>
                    content
                    <CKEditor
                    editor={ ClassicEditor }
                    data={newContent}
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setNewContent(data)
                    } }
                />
                </label>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );

};

export default NewsForm;