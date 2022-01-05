import React, {useState} from "react";

function ContactForm() {
    //is the ability to initialize the values of the state. In this case, we want to clear the input fields on the component loading.
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value})
        // console.log(formState)} <- How to see what is happening every change of state.
    }
    function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
}
        // JSX
    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type='text' name="name" defaultValue={name} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="email">Email Address:</label>
                    <input type='email' name="email"defaultValue={email} onChange={handleChange}/> 
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onChange={handleChange} rows="5" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
    }
    
    export default ContactForm;