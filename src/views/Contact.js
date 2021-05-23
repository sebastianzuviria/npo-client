import React from 'react';
import ContactForm from '../components/Contact/ContactForm';
import ContactInfo from '../components/Contact/ContactInfo';
import BasicLayout from '../Layouts/BasicLayout';

const Contact = () => {
  return (
    <BasicLayout>
      <div className="container">
        <main>
          <div className="py-5 text-center">
            <ContactInfo />
          </div>
          <div className="row g-5 form-contacto">
              <div className="col-md-10 col-lg-10">
                  <ContactForm />
              </div>
          </div>
        </main>
      </div>

    </BasicLayout>
  );
};

export default Contact;
