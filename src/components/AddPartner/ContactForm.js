import React, { Component } from 'react';
import {reduxForm, Field} from 'redux-form';
import {requiredField, maxLengthCreator} from '../../utils/validators'
import {Textarea} from '../common/FormsControls/FormsControls'

const maxLength10 = maxLengthCreator(10);
const ContactForm = props  =>{
    return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" component={Textarea} placeholder={'Post message'} type="text" validate={[requiredField, maxLength10]}/>
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email" />
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
  
//   ContactForm = reduxForm({
//     form: 'contact'
//   })(ContactForm);

//   export default ContactForm;

  export default reduxForm({ form: 'AddPartnerForm' })(ContactForm)