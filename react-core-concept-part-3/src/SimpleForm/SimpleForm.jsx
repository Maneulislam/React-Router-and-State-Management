import React from 'react';




const SimpleForm = () => {

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(event.target.name.value);
        console.log(event.target.email.value);
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="name" type="text" placeholder='Your Name' />
                <br /><br />
                <input type="text" placeholder='Your Email' name='email' />
                <br />
                <input type="submit" value="Submit" />

            </form>
        </div>
    );
};

export default SimpleForm;