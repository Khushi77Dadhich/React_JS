import React from 'react';

export const UncontrolledForm = () => {
    const nameInput = React.createRef();
    const ageInput = React.createRef();
    const hairColorInput = React.createRef();

    const handleSubmit=() => {
        console.log(nameInput.current.value);
        console.log(ageInput.current.value);
        console.log(hairColorInput.current.value);
        e.preventDefault();
    }
    return(
        <form onSubmit={handleSubmit}>
            <input name="name" type='text' placeholder='Name'/>
            <input name="age" type='number' placeholder='Age'/>
            <input name="hairColor" type='text' placeholder='Hair Color'/>
            <input type='submit' value='Submit'/>
            
        </form>
    )
}