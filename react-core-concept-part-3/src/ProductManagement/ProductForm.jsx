import React, { useState } from 'react';

const ProductForm = ({ handleProducts }) => {

    const [error, setError] = useState('');

    const handleForm = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;

        if (name.length === 0) {
            setError("Please provide a name");
            return;
        }

        else if (price.length === 0) {
            setError("Please provide a Price");
            return;
        }

        else if (price < 0) {
            setError("Please provide a valid price");
            return;
        }

        else if (quantity.length === 0) {
            setError("Please provide a Quantity");
            return;
        }
        else {
            setError('')
        }



        const product = {
            name,
            price,
            quantity
        }

        handleProducts(product);


    }

    return (
        <div>
            <form onSubmit={handleForm}>
                <input type="text" name='name' placeholder='Product Name' />
                <br />
                <input type="text" name='price' placeholder='Product Price' />
                <br />
                <input type="text" name='quantity' placeholder='Product Quantity' />
                <br />
                <input type="submit" value="Submit" />
            </form>

            <p style={{ color: 'red' }}>{error}</p>
        </div>
    );
};

export default ProductForm;