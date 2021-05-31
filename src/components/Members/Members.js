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
        
        <div class="row" >
            
            {members.length > 0 ? (
                members.map((item) => 
                <div class="col-lg-4 col-sm-4" key={item.id}>
                    <img src={item.image} alt={item.name} className="bd-placeholder-img rounded-circle" width="140" height="140" />
                        <p>{item.name}</p>
                </div>
                
                )
            ) : <p>There is no registered member</p>}
        </div>

    )
}


export default MembersOrganization;