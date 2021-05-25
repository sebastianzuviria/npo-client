import React,{useState,useEffect} from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './form.css'

const Form = ({activity}) => {
    const [name, setName] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        if (activity) {
            setName(activity.name)
            setContent(activity.content)
        }
    },[]);

    const handleSubmit= async (e)=>{
        e.preventDefault();
        const objActivity = {
            name,
            content
        }
        console.log(objActivity);
        /* try {
            if (activity) {
                //const editedActivity = await activityService.editActivity(id, objActivity);
                console.log(activity, 'edited Activity');
            } else {
                //const createdActivity = await activityService.createActivity(objActivity);
                console.log(activity, 'created Activity');
            }
        } catch (error) {
            console.log(error);
        } */
    }

    useEffect(() => {
        
    }, [])
    return (
        <div className='d-flex justify-content-center'>
            <div className='form-Activites'>
                <h2 className='text-center'>{(activity)?'Edit Activity':'Create Activity'}</h2>
                <form
                    onSubmit={handleSubmit}>
                        <label className='content-act'>
                            Name
                            <input 
                                className='input-act'
                                type="text"
                                placeholder="Name" 
                                value={(activity)?name:''}
                                onChange={(e)=>{setName(e.target.value)}}
                            />
                        </label>
                        <label className='content-act mt-3'>
                            Content
                            <CKEditor
                                editor={ ClassicEditor }
                                data={(activity)?content:''}
                                onChange={ ( event, editor ) => {
                                    const data = editor.getData();
                                    setContent(data)
                                } }
                            />
                        </label>
                        <div className='d-flex justify-content-center mt-3 mb-3'>
                            <button className='button-activity'>{(activity?'Update':'Create')}</button>
                        </div>
                </form>
            </div>
        </div>
    )
}

export default Form
