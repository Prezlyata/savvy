import React from 'react';
import {Link} from 'react-router-dom';
import Input from './Input';
import {reduxForm, Field} from 'redux-form';


const renderInput = ({input, meta}) =>{
    <Input {...input} type ='text' errorMessage={meta.touched && meta.error} />
}

const onSubmit = values =>{
    alert(JSON.stringify(values))
}

const required = values => {
   if (!value || value === ''){
       return 'This field is required'
   }
   return underfined;
}

const ReduxForm = ({handleSubmit, valid}) => {
    <div>
        <h2> ReduxForm </h2>
        <form onSubmit={handleSubmit}>
            <Field
                name='cunstomer-id'
                component = {renderInput}
                validate = {required}
            />
            <button disabled={!valid} type='submit'>Submit</button>
        </form>
    </div>
}

export default reduxForm ({
    from: 'my-customer-registration-form',
    onSubmit,
}) (ReduxForm); 