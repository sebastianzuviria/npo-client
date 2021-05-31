import React ,{useEffect, useState} from 'react';
import apiGetService from '../../services/apiGetService'
import './member.css';

const MembersOrganization= ()=>{

    const [members , setMembers]=useState([]);

    const allmembers = async()=>{
        const info = await apiGetService('members');
        setMembers(info)

    }

    useEffect(() => {
        allmembers();
    }, [])

    return (
        
        <div class="row" style={{display: 'flex', justifyContent: 'center'}}>
            
            {members.length > 0 ? (
                members.map((item) => 
                <div class="col-lg-4 col-sm-4" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItem: 'center'}}>
                    {/* <img src={item.image} alt={`Picture of ${item.name}`} class="bd-placeholder-img rounded-circle" width="140" height="140" /> */}
                    <div style={{width:'150px', height: '150px', backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '100%', alignSelf: 'center'}}></div>
                        <p style={{alignSelf: 'center'}}>{item.name}</p>
                </div>
                
                )
            ) : <p>There is no registered member</p>}
        </div>

    )
}


export default MembersOrganization;