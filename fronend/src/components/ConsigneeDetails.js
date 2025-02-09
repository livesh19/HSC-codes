import React, { useState } from "react";
import NameAndAddress from "./NameAndAddressDetails";

const ConsigneeDetails = ({ nextStep, prevStep }) => {
    const [ConsigneeFName, setConsigneeFName] = useState("");
    const [ConsigneeLName, setConsigneeLName] = useState("");
    const [ConsigneeAddress1, setConsigneeAddress1] = useState("");
    const [ConsigneeAddress2, setConsigneeAddress2] = useState("");
    const [ConsigneeCity, setConsigneeCity] = useState("");
    const [ConsigneeState, setConsigneeState] = useState("");
    const [ConsigneeCountry, setConsigneeCountry] = useState("");
    const [ConsigneeEmail, setConsigneeEmail] = useState("");
    const [ConsigneePhone, setConsigneePhone] = useState("");
    const [consigneeRegNo, setConsigneeRegNo] = useState("");
    const [consigneeTIN, setConsigneeTIN] = useState("");

    return (
        <div className="step">
            <h2>Consignee Details</h2>
            <NameAndAddress
                prefix="Consignee"
                onFNameChange={setConsigneeFName}
                onLNameChange={setConsigneeLName}
                onAddress1Change={setConsigneeAddress1}
                onAddress2Change={setConsigneeAddress2}
                onCityChange={setConsigneeCity}
                onStateChange={setConsigneeState}
                onCountryChange={setConsigneeCountry}
                onEmailChange={setConsigneeEmail}
                onPhoneChange={setConsigneePhone}
            />
            <label htmlFor="consigneeRegNo">Registration No:</label>
            <input type="text" id="consigneeRegNo" value={consigneeRegNo} onChange={(e) => setConsigneeRegNo(e.target.value)} required />
            <label htmlFor="consigneeTIN">TIN No:</label>
            <input type="text" id="consigneeTIN" value={consigneeRegNo} onChange={(e) => setConsigneeTIN(e.target.value)} required />
            <div className="navigation">
                <button type="button" className="previous" onClick={() => prevStep(2)}>Previous</button>
                <button type="button" className="next" onClick={() => nextStep(2)}>Next</button>
            </div>
        </div>
    );
};

export default ConsigneeDetails;