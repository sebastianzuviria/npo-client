import React from 'react';
import MembersOrganization from '../components/Members/Members'
import BasicLayout from '../Layouts/BasicLayout';



const As = () => {
    return (
        <>
            <BasicLayout>
                <main>
                    <div class="py-5 text-center">
                        <h2>Nosotros</h2>
                        <p class="lead">Somos quienes aprendimos mucho realizando esta aplicacion</p>
                    </div>
                </main>
                <div class="container marketing">
                    <div class="row">
                        <MembersOrganization/>
                    </div>
                </div>
            </BasicLayout>
        </>
    )
}

export default As
