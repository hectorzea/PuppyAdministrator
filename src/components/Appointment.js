import React from 'react';

const Appointment = ({appointment, deleteAppointment}) => {
    const {
        id,
        pet,
        petOwner,
        dateOfCreation,
        timeOfCreation,
        petSimptoms
    } = appointment;
    return (
        <div className="cita">
            <p> Puppy:
                <span>
                    {pet}
                </span>
            </p>
            <p> Pet Owner:
                <span>
                    {petOwner}
                </span>
            </p>
            <p> Date:
                <span>
                    {dateOfCreation}
                </span>
            </p>
            <p> Time:
                <span>
                    {timeOfCreation}
                </span>
            </p>
            <p> Simptoms:
                <span>
                    {petSimptoms}
                </span>
            </p>
            <button onClick={() => {
                deleteAppointment(id)
            }} className="button eliminar u-full-width">
                Delete
            </button>
        </div>
    );
};

export default Appointment;
