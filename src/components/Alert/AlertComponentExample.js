import React from 'react';
import { successAlert ,cancelAlert ,errorAlert, infoAlert, confirmAlert } from './Alert';
const AlertComponentExample = () => {

    const handleConfirm = async () =>{
        
        const res = await confirmAlert();
        if(res.isConfirmed) return successAlert();
        cancelAlert();
    }
    const handleInfo = async () => {
        const res = await infoAlert('lorem lorem lorem')
        console.log(res.isConfirmed)
    }
    const handleError = async () => {
        const res = await errorAlert()
        console.log(res)
    }

    return(<>
        
        <button onClick={handleConfirm}>ConfirmAlert</button>
        <button onClick={handleInfo}>InfoAlert</button>
        <button onClick= {handleError}>ErrorAlert</button>
        

    </>)

}

export default AlertComponentExample;