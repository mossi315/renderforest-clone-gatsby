import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("xqkrqdga");
  if (state.succeeded) {
      return <p className="container contact-form text-center p-4 bg-dark bg-gradient text-light rounded">Thanks for joining!</p>;
  }
  return (
    <section>
      <div className="container contact-form text-center p-4 bg-dark bg-gradient text-light rounded">
        <h2>Join Renderforest newsletter</h2>
        <h5>Be among the first ones to receive our latest news and offers</h5>
        <div className="d-flex justify-content-center">
          <form onSubmit={handleSubmit} className="row row-cols-lg-auto g-3 align-items-center">
            <div className="col-sm-12 col-md-6">
              <label htmlFor="email" className="visually-hidden">
              Username
              </label>
              <input
                id="username"
                type="text" 
                name="username"
                placeholder='Enter UserName'
                className="form-control"
              />
              <ValidationError 
                prefix="Username" 
                field="username"
                errors={state.errors}
              />
            </div>

            <div className="col-sm-12 col-md-6">
              <label htmlFor="email" className="visually-hidden">
                Email Address
              </label>
              <div class="input-group">
                <input
                  id="email"
                  type="email" 
                  name="email"
                  className="form-control"
                  placeholder='Enter Email'
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                />
              </div>
            </div>
            <div>
              <button type="submit" disabled={state.submitting} className="btn btn-primary">
                Join
              </button>
            </div>
          </form>
        </div>

        <p className='mt-4'>You can easily unsubscribe at any time.</p>
      </div>
    </section>

  );
}

export default ContactForm;