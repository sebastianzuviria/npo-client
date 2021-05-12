import React ,{useEffect, useState} from 'react';
import apiGetService from '../../services/apiGetService'

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
        
        <div>
            {members.length > 0 ? (
                members.map((item) => 
                <div>
                <img src={item.image}>
                </img>
                
                <p>{item.name}</p>
                </div>
                
                )
            ) : <p>There is no registered member</p>}
        </div>
    )
}


export default MembersOrganization;