import React from 'react';
import { useState } from 'react';

export default function Checkbox(props) {

    const [checked, setChecked] = useState(false);

    const checkboxes = [
        { id: 'completed', label: 'Class completed' },
        { id: 'interrupted', label: 'Class interrupted/aborted' }
    ]

    const [displayOptions, setDisplayOptions] = useState(false);
    const [displayOtherReason, setdisplayOtherReason] = useState(false);

    const optionCheckboxes = [
        { id: 'noShow', label: 'Student did not show up for class' },
        { id: 'noInterest', label: 'Student did not show any interest' },
        { id: 'studentDisconnected', label: 'Student got disconnected' },
        { id: 'teacherDisconnected', label: 'I got disconnected' },
        { id: 'otherReason', label: 'Other reason' }
    ]

    const checkClick = (e) => {
        setChecked(e.target.checked);
        if (e.target.id === 'interrupted' && e.target.checked) {
            setDisplayOptions(true);
        }
        if (e.target.id === 'otherReason' && e.target.checked) {
            setdisplayOtherReason(true);
        }
    }

    return (
        <React.Fragment>
            {checkboxes && checkboxes.map(check => {
                return (
                    <div key={check.id}>
                        <input onChange={checkClick} type="checkbox" id={check.id}></input>
                        <label htmlFor={check.id}>{check.label}</label>
                    </div>
                )
            })}
            <div style={{ marginLeft: '10px' }}>
                {displayOptions && optionCheckboxes.map(option => {
                    return (
                        <div key={option.id}>
                            <input onChange={checkClick} type="checkbox" id={option.id}></input>
                            <label htmlFor={option.id}>{option.label}</label>
                        </div>
                    )
                })}
                {displayOtherReason &&
                    <div>
                        <textarea id="otherReasonText" name="otherReason" rows="4" cols="50">
                        </textarea>
                    </div>
                }
            </div>
        </React.Fragment >
    );
}
