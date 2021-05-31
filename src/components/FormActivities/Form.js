import React, { useState, useEffect } from 'react'
import {useSelector} from 'react-redux'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import apiUpdateService from '../../services/apiUpdateService'
import apiPostService from '../../services/apiPostService'
import { successAlert, cancelAlert, confirmAlert } from '../Alert/Alert';
import {userLogged} from '../../slices/userSlice'
import './form.css'

const Form = ({ activity, close }) => {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('')
  const [newImage, setNewImage] = useState('')
  console.log(image);

  const user = useSelector(userLogged)
  console.log(user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData()
    formData.append('name',name)  
    formData.append('image', newImage)  
    formData.append('content',content)  
    formData.append('userId', user.id)  
    formData.append('urlImage', image)  
    const config = {
      headers:{'Content-Type':'multipart/form-data'}
    }
    try {
      if (activity) {
        const res = await confirmAlert();
        if (res.isConfirmed) {
          await apiUpdateService('activities', activity.id, formData, config)
          close()
          setName('')
          setContent('')
          return successAlert()
        } else {
          cancelAlert();
        }
      } else {
        //const createdActivity = await activityService.createActivity(objActivity);
        const res = await confirmAlert();
        if (res.isConfirmed) {
          await apiPostService('activities', formData, config)
          close()
          return successAlert()
        } else {
          cancelAlert();
        }
        console.log(activity, 'created Activity');
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    (async () => {
      if (activity) {
        setName(activity.name)
        setContent(activity.content)
        setImage(activity.image)
      }
    })();
  }, [])
  return (
    <div className='d-flex justify-content-center'>
      <div className='form-Activites'>
        <h2 className='text-center'>{activity ? 'Edit Activity' : 'Create Activity'}</h2>
        <form
          onSubmit={handleSubmit}>
          <label className='content-act'>
            Name
                            <input
              className='input-act'
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => { setName(e.target.value) }}
            />
          </label>
          <label className='mt-3 d-flex align-items-center'>

            <input
              type='file'
              className='form-control'
              onChange={(e) => { setNewImage(e.target.files[0]) }}
            />
            {activity?(<img style={{ width: '30%' }} src={image} alt='prueba' />):''}
          </label>
          <label className='content-act mt-3'>
            Content
            <CKEditor
              editor={ClassicEditor}
              data={content}
              onChange={(event, editor) => {
                const data = editor.getData();
                setContent(data)
              }}
            />
          </label>
          <div className='d-flex justify-content-center mt-3 mb-3'>
            <button className='button-activity'>{activity ? 'Update' : 'Create'}</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form
