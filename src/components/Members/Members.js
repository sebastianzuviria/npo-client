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
        
        <div class="container">
            <div class="row">
            {members.length > 0 ? (
                members.map((item) => 
                <div class="col-sm-6 member">
                <img src={item.image} alt={`Picture of ${item.name}`} class="rounded-circle" />
                                
                <p>{item.name}</p>
                </div>
                
                )
            ) : <p>There is no registered member</p>}
            </div>
        </div>
    )
}


export default MembersOrganization;