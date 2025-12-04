import React from 'react';
import useInputField from '../Hooks/UseInputField';




const HookForm = () => {

    const [name, nameOnChange] = useInputField('');
    const [password, passwordOnChange] = useInputField('');

    const handleForm = (event) => {
        event.preventDefault();

        console.log("Submit:", name, password);

    }

    return (
        <div>
            <form onSubmit={handleForm}>
                <input defaultValue={name} onChange={nameOnChange} type="text" name='name' placeholder='Your Name' />
                <br />
                <input defaultValue={password} onChange={passwordOnChange} type="password" name='password' placeholder='Password' />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;