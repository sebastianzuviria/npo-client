import React from 'react';
import MembersOrganization from '../components/Members/Members'
import BasicLayout from '../Layouts/BasicLayout';



const As = () => {
    return (
        <>
            <BasicLayout>
                <main>
                    <div className="py-5 text-center">
                        <h2>As</h2>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </main>
                <div className="container marketing">
                    <div className="row" >
                        <MembersOrganization/>
                    </div>
                </div>
            </BasicLayout>
        </>
    )
}

export default As
