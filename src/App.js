import React, {Fragment, useState, useEffect} from 'react';
import Form from "./components/Form";
import Appointment from "./components/Appointment";

function App() {
    let initialAppointments = JSON.parse(localStorage.getItem('appointments'));
    if (!initialAppointments) {
        initialAppointments = [];
    }
    const [appointments, saveAppointments] = useState(initialAppointments);

    //function handler to take actual appointments and add another one
    const createAppointment = (appointment) => {
        saveAppointments([...appointments, appointment]);
    };

    //use effect to handle certain operations when the state changes
    useEffect(() => {
        if (initialAppointments) {
            localStorage.setItem('appointments', JSON.stringify(appointments))
        } else {
            localStorage.setItem('appointments', JSON.stringify([]))
        }
    }, [appointments]);

    //function handler to delete appointment by id
    const deleteAppointment = (id) => {
        const newAppointments = appointments.filter(appointment => appointment.id !== id);
        saveAppointments(newAppointments);
        console.log(id)
    };

    //conditional message
    const title = appointments.length === 0 ? 'Add an apointment...' : 'Manage your appointments';

    return (
        <Fragment>
            <h1>Pacients Puppies Administrator</h1>
            <div className="container">
                <div className="row">
                    <div className="one-half column">
                        <Form createAppointment={createAppointment}/>
                    </div>
                    <div className="one-half column">
                        <h2>{title}</h2>
                        {appointments.map(appointment => (
                            <Appointment deleteAppointment={deleteAppointment} appointment={appointment}
                                         key={appointment.id}/>
                        ))}
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default App;
