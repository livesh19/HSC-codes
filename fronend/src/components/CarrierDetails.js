import React, { useState } from "react";
import NameAndAddress from "./NameAndAddressDetails";

const CarrierDetails = ({ prevStep }) => {
  const [CarrierFName, setCarrierFName] = useState("");
  const [CarrierLName, setCarrierLName] = useState("");
  const [CarrierAddress1, setCarrierAddress1] = useState("");
  const [CarrierAddress2, setCarrierAddress2] = useState("");
  const [CarrierCity, setCarrierCity] = useState("");
  const [CarrierState, setCarrierState] = useState("");
  const [CarrierCountry, setCarrierCountry] = useState("");
  const [CarrierEmail, setCarrierEmail] = useState("");
  const [CarrierPhone, setCarrierPhone] = useState("");
  

  return (
    <div className="step">
      <h2>Carrier Details</h2>
      <NameAndAddress
        prefix="Carrier"
        onFNameChange={setCarrierFName}
        onLNameChange={setCarrierLName}
        onAddress1Change={setCarrierAddress1}
        onAddress2Change={setCarrierAddress2}
        onCityChange={setCarrierCity}
        onStateChange={setCarrierState}
        onCountryChange={setCarrierCountry}
        onEmailChange={setCarrierEmail}
        onPhoneChange={setCarrierPhone}
      />

      <div className="navigation">
        <button type="button" className="previous" onClick={() => prevStep(5)}>Previous</button>
        <button type="submit">Generate Bill of Lading</button>
      </div>
    </div>
  );
};

export default CarrierDetails;