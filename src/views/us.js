import React from 'react';
import MembersOrganization from '../components/Members/Members'
import BasicLayout from '../Layouts/BasicLayout';



const Us = () => {
    return (
        <>
            <BasicLayout>
                <main>
                    <div className="py-5 text-center">
                        <h2>Nosotros</h2>
                        <p className="lead">Somos quienes aprendimos mucho realizando esta aplicacion</p>
                    </div>
                </main>
                <div className="container marketing">
                    <div className="row">
                        <MembersOrganization/>
                    </div>
                </div>
            </BasicLayout>
        </>
    )
}

export default Us
