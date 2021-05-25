import React,{useState,useEffect} from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './form.css';

const Form = ({category}) => {
    const [name, setName] = useState('');
    const [description, setdescription] = useState('');
    console.log(category);

    useEffect(() => {
        if (category) {
            setName(category.name)
            setdescription(category.description)
        }
    },[]);

    const handleSubmit= async (e)=>{
        e.preventDefault();
        const objcategory = {
            name,
            description
        }
        console.log(objcategory);
        /* try {
            if (category) {
                //const editedcategory = await categoryService.editcategory(id, objcategory);
                console.log(category, 'edited category');
            } else {
                //const createdcategory = await categoryService.createcategory(objcategory);
                console.log(category, 'created category');
            }
        } catch (error) {
            console.log(error);
        } */
    }
    return (
        
        <div className='form-Categories'>
            <h2 className='text-center'>{(category)?'Edit category':'Create category'}</h2>
            <form
                onSubmit={handleSubmit}>
                    <label className='description-cat'>
                        Name
                        <input 
                            className='input-cat'
                            type="text"
                            placeholder="Name" 
                            value={(category)?name:''}
                            onChange={(e)=>{setName(e.target.value)}}
                        />
                    </label>
                    <label className='description-cat'>
                        Description
                        <CKEditor
                            editor={ ClassicEditor }
                            data={(category)?description:''}
                            onChange={ ( event, editor ) => {
                                const data = editor.getData();
                                setdescription(data)
                            } }
                        />
                    </label>
                    <button className='button-category'>{(category?'Update':'Create')}</button>
            </form>
        </div>
    )
}

export default Form

