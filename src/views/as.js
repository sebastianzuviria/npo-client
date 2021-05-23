import React from 'react';
import MembersOrganization from '../components/Members/Members'
import BasicLayout from '../Layouts/BasicLayout';



const As = () => {
    return (
        <>
            <BasicLayout>
                <main>
                    <div class="py-5 text-center">
                        <h2>As</h2>
                        <p class="lead">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
                    </div>
                </main>
                <div class="container marketing">
                    <div class="row" >
                        <MembersOrganization/>
                    </div>
                </div>
            </BasicLayout>
        </>
    )
}

export default As