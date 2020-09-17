import React, {Fragment, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = ({createAppointment}) => {
    //creating initial state for puppys <3
    const [appointment, updateAppointment] = useState({
        pet: '',
        petOwner: '',
        dateOfCreation: '',
        timeOfCreation: '',
        petSimptoms: '',
    });

    const [formState, updateFormState] = useState('');

    const {
        pet,
        petOwner,
        dateOfCreation,
        timeOfCreation,
        petSimptoms
    } = appointment;

    //function handler for input user
    const updateState = (event) => {
        updateAppointment({
            ...appointment,
            [event.target.name]: event.target.value
        });
        console.log("writing...")
    };

    //when user submit forms function

    const submitAppointment = (e) => {
        e.preventDefault();
        //validate form if it's oki <3
        if (pet.trim() === '' || petOwner.trim() === "" ||
            dateOfCreation.trim() === "" ||
            timeOfCreation.trim() === "" ||
            petSimptoms.trim() === "") {
            updateFormState('error');
            return;
        }
        //Delete previous form state message
        updateFormState('');
        //Assign Id
        appointment.id = uuidv4();
        // Create Appointment <3 xD
        createAppointment(appointment);
        //Reset Form
        updateAppointment({
            pet: '',
            petOwner: '',
            dateOfCreation: '',
            timeOfCreation: '',
            petSimptoms: '',
        })
    };


    return (
        <Fragment>
            <h2>Create Appointment</h2>
            {formState === 'error' ? <p className="alerta-error">All fields are required</p> : null}
            <form action="" onSubmit={submitAppointment}>
                <label htmlFor="">Pet Name</label>
                <input
                    type="text"
                    name='pet'
                    className="u-full-width"
                    placeholder="Puppy Name"
                    onChange={updateState}
                    value={pet}
                />
                <label htmlFor="">Pet Owner </label>
                <input
                    type="text"
                    name='petOwner'
                    className="u-full-width"
                    placeholder="Pet owner"
                    onChange={updateState}
                    value={petOwner}
                />
                <label htmlFor="">Date</label>
                <input
                    type="date"
                    name='dateOfCreation'
                    className="u-full-width"
                    onChange={updateState}
                    value={dateOfCreation}
                />
                <label htmlFor="">Date</label>
                <input
                    type="time"
                    name='timeOfCreation'
                    className="u-full-width"
                    onChange={updateState}
                    value={timeOfCreation}
                />
                <textarea
                    className="u-full-width"
                    name="petSimptoms"
                    value={petSimptoms}
                    onChange={updateState}>
                </textarea>
                <button type='submit'
                        className="u-full-width button-primary">
                    Add Apointment
                </button>
            </form>
        </Fragment>
    );
};

export default Form;
