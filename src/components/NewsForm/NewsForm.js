import './NewsForm.css';
import React, { useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import apiPostService from '../../services/apiPostService';
import apiGetService from '../../services/apiGetService';
import apiUpdateService from '../../services/apiUpdateService';

const NewsForm = ({ id }) => {
    const [allCategories, setAllCategories] = useState([])
    const [newTitle, setNewTitle] = useState('');
    const [newImage, setNewImage] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [newContent, setNewContent] = useState('');
    const [newCategoryId, setNewCategoryId] = useState('');
    const [newCategoryName, setNewCategoryName] = useState('')
    const [isEdit, setIsEdit] = useState(false);
    const [titleOfForm, setTitleOfForm] = useState('Create a New');  

    console.log(newCategoryId)

    useEffect(() => {
        (async () => {
            const categories = await apiGetService('categories')
            setAllCategories(categories)
        })()
    }, [])

    useEffect(() => {
        if (id) {
            (async () => {
                const categories = await apiGetService('categories')
                setAllCategories(categories)
                const novelty = await apiGetService('news', String(id))
                console.log(novelty)
                setIsEdit(true) 
                setNewTitle(novelty.title)
                setImageUrl(novelty.image)
                setNewCategoryId(novelty.category.id)
                setNewCategoryName(novelty.category.name)
                setNewContent(novelty.content)
                setTitleOfForm('Edit a New')
            })()
        }
    },[id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData()
        formData.append('image', newImage)
        formData.append('title', newTitle)
        formData.append('category', newCategoryId)
        formData.append('content', newContent) 
        formData.append('imageUrl', imageUrl)
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }       

        try {
            if (isEdit) {
                const response = await apiUpdateService('news',String(id), formData, config)
                console.log(response)
                setNewTitle('')
                setImageUrl('')
                setNewCategoryId('')
                setNewCategoryName('')
                setNewContent('')
            } else {
                const response = await apiPostService('news', formData, config)
                console.log(response)
                setNewTitle('')
                setImageUrl('')
                setNewCategoryId('')
                setNewCategoryName('')
                setNewContent('')
            }
        } catch (error) {
            console.log(error);
        }
    };

    console.log(newContent)

    return (
        <div className='d-flex justify-content-center form-container'>
            <form className='form-new' onSubmit={handleSubmit}>
            <h2 className='text-center'>{titleOfForm}</h2>
                <label className='w-100'>
                    Title
                    <input 
                        className='input-new'
                        type='text'
                        value={newTitle}
                        onChange={({target}) => { setNewTitle(target.value) }}
                    />
                </label>
                <label className='w-100 '>
                    <div>Image</div>
                    <div className='image-container'>
                    {id && <img style={{ width: '30%'}} src={imageUrl} alt='prueba'/>}
                    <input 
                        className='input-image'
                        type='file'
                        onChange={({target}) => { setNewImage(target.files[0]) }}
                    />
                    </div>
                </label>
                <label className='w-100'>
                    Category
                    <select
                        className='select-new'
                        value={newCategoryId}
                        onChange={({ target }) => setNewCategoryId(target.value)}
                    >
                        {id ? (<option value={newCategoryId} defaultValue>{newCategoryName}</option>) : <option value='' defaultValue>Select</option>}
                        
                        {allCategories.map(c => {
                            if(newCategoryId !== c.id) {
                               return <option key={c.name} value={c.id}>{c.name}</option>
                            }
                        }
                        )}
                    </select>
                </label>
                <label className='content-new'>
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
                <div className='d-flex justify-content-center'>
                    <button className='button-new' type='submit'>{isEdit ? 'Edit' : 'Create'}</button>
                </div>
            </form>
        </div>
    );
};

export default NewsForm;