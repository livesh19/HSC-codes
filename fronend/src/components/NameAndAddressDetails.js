import React from "react";

const NameAndAddressDetails = ({ 
    prefix, 
    onFNameChange, 
    onLNameChange,
    onAddress1Change,
    onAddress2Change,
    onCityChange,
    onStateChange,
    onCountryChange,
    onEmailChange,
    onPhoneChange
 }) => {
    return (
        <div>
             <label htmlFor={`${prefix}FName`}>First Name</label>
            <input type="text" id={`${prefix}FName`} onChange={(e) => onFNameChange(e.target.value)}/>
            <label htmlFor={`${prefix}LName`}>Last Name</label>
            <input type="text" id={`${prefix}FName`} onChange={(e) => onLNameChange(e.target.value)} required />
            <label htmlFor={`${prefix}Address1`}>Address 1</label>
            <input type="text" id={`${prefix}Address1`} onChange={(e) => onAddress1Change(e.target.value)} required />
            <label htmlFor={`${prefix}Address2`}>Address 2</label>
            <input type="text" id={`${prefix}Address2`} onChange={(e) => onAddress2Change(e.target.value)} />
            <label htmlFor={`${prefix}City`}>City</label>
            <input type="text" id={`${prefix}City`} onChange={(e) => onCityChange(e.target.value)}/>
            <label htmlFor={`${prefix}State`}>State</label>
            <input type="text" id={`${prefix}State`} onChange={(e) => onStateChange(e.target.value)}/>
            <label htmlFor={`${prefix}Country`}>Country</label>
            <input type="text" id={`${prefix}Country`} onChange={(e) => onCountryChange(e.target.value)}/>
            <label htmlFor={`${prefix}Email`}>Email</label>
            <input type="text" id={`${prefix}Email`} onChange={(e) => onEmailChange(e.target.value)}/>
            <label htmlFor={`${prefix}Phone`}>Phone</label>
            <input type="text" id={`${prefix}Phone`}onChange={(e) => onPhoneChange(e.target.value)} />
        </div>
    );
};

export default NameAndAddressDetails;


