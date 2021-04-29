import React, { useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const NewsForm = () => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');

    console.log(content)

    const handleSubmit = (e) => {
        e.preventDefault()

        const newsObject = {
            title,
            image,
            category,
            content
        }

        console.log(newsObject)
    }

    return (
        <div>
            <h2>News Form</h2>
            <form style={{ display: 'flex', flexDirection: 'column'}} onSubmit={handleSubmit}>
                <label>
                    title
                    <input 
                        type='text'
                        value={title}
                        onChange={({target}) => { setTitle(target.value) }}
                    />
                </label>
                <label>
                    image
                    <input 
                        type='text'
                        value={image}
                        onChange={({target}) => { setImage(target.value) }}
                    />
                </label>
                <label>
                    category
                    <input 
                        type='text'
                        value={category}
                        onChange={({target}) => { setCategory(target.value) }}
                    />
                </label>
                <label>
                    content
                    <CKEditor
                    editor={ ClassicEditor }
                    data={content}
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setContent(data)
                    } }
                />
                </label>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )

}

export default NewsForm