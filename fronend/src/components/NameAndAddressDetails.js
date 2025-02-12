import React from "react";

const NameAndAddressDetails = ({ 
    prefix, 
    fName, lName, address1, address2, city, state, country, email, phone,
    onFNameChange, onLNameChange, onAddress1Change, onAddress2Change, 
    onCityChange, onStateChange, onCountryChange, onEmailChange, onPhoneChange 
}) => {
    return (
        <div>
            <label htmlFor={`${prefix}FName`}>First Name</label>
            <input 
                type="text" 
                id={`${prefix}FName`} 
                value={fName}
                onChange={(e) => onFNameChange(e.target.value)} 
                required 
            />

            <label htmlFor={`${prefix}LName`}>Last Name</label>
            <input 
                type="text" 
                id={`${prefix}LName`} 
                value={lName}
                onChange={(e) => onLNameChange(e.target.value)} 
                required 
            />

            <label htmlFor={`${prefix}Address1`}>Address 1</label>
            <input 
                type="text" 
                id={`${prefix}Address1`} 
                value={address1}
                onChange={(e) => onAddress1Change(e.target.value)} 
                required 
            />

            <label htmlFor={`${prefix}Address2`}>Address 2</label>
            <input 
                type="text" 
                id={`${prefix}Address2`} 
                value={address2}
                onChange={(e) => onAddress2Change(e.target.value)} 
            />

            <label htmlFor={`${prefix}City`}>City</label>
            <input 
                type="text" 
                id={`${prefix}City`} 
                value={city}
                onChange={(e) => onCityChange(e.target.value)} 
                required 
            />

            <label htmlFor={`${prefix}State`}>State</label>
            <input 
                type="text" 
                id={`${prefix}State`} 
                value={state}
                onChange={(e) => onStateChange(e.target.value)} 
                required 
            />

            <label htmlFor={`${prefix}Country`}>Country</label>
            <input 
                type="text" 
                id={`${prefix}Country`} 
                value={country}
                onChange={(e) => onCountryChange(e.target.value)} 
                required 
            />

            <label htmlFor={`${prefix}Email`}>Email</label>
            <input 
                type="email" 
                id={`${prefix}Email`} 
                value={email}
                onChange={(e) => onEmailChange(e.target.value)} 
                required 
            />

            <label htmlFor={`${prefix}Phone`}>Phone</label>
            <input 
                type="text" 
                id={`${prefix}Phone`} 
                value={phone}
                onChange={(e) => onPhoneChange(e.target.value)} 
                required 
            />
        </div>
    );
};

export default NameAndAddressDetails;
