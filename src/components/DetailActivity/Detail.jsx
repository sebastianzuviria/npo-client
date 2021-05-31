import React,{useState,useEffect} from 'react'
import './Detail.css'
import apiGet from '../../services/apiGetService'

const Detail = ({id}) => {
    const [activity, setActivity] = useState({})
    console.log(activity);
    
    useEffect(() => {
        (async () => {
            const returnedActivity = await apiGet('activities', id) ;
            setActivity ( returnedActivity ) ;
            
        }) ();
    }, [])
    return (
        <div className="d-flex justify-content-center">
        
            <div className='activity-detail'>
                <h2>{activity.name}</h2>
                <div className='d-flex justify-content-center'>
                    <img className='img-act' src={activity.image} alt=""/>
                </div>
                    <div>
                        {activity.content}
                    </div>
                <br />
                <div className='d-flex justify-content-between'>
                    <span className='date'>{activity.createdAt && activity.createdAt.slice(0,10)}</span>
                </div>
            </div>
        </div>
    )
}

export default Detail
