import React from 'react';

const FormAction = () => {

    const handleForm = (formData) => {

        console.log(formData.get('email'));
        console.log(formData.get('password'));


    }

    return (
        <div>
            <form action={handleForm}>
                <input type="email" name='email' placeholder='Email' />
                <br />
                <input type="password" name='password' placeholder='Password' />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default FormAction;