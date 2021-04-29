import React, { useState } from 'react'

const NewsForm = () => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');


    return (
        <div>
            <h2>News Form</h2>
            <form style={{ display: 'flex', flexDirection: 'column'}}>
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
                    <textarea 
                        type='text'
                        value={content}
                        onChange={({target}) => { setContent(target.value) }}
                    />
                </label>
            </form>
        </div>
    )

}

export default NewsForm