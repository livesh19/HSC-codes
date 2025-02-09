import React,{ useState } from "react";
import NameAndAddress from "./NameAndAddressDetails";

const ShipperDetails = ({ nextStep }) => {
  const [shipperFName, setShipperFName] = useState("");
  const [shipperLName, setShipperLName] = useState("");
  const [shipperAddress1, setShipperAddress1] = useState("");
  const [shipperAddress2, setShipperAddress2] = useState("");
  const [shipperCity, setShipperCity] = useState("");
  const [shipperState, setShipperState] = useState("");
  const [shipperCountry, setShipperCountry] = useState("");
  const [shipperEmail, setShipperEmail] = useState("");
  const [shipperPhone, setShipperPhone] = useState("");
  const [shipperCIN, setShipperCIN] = useState("");
  const [shipperUOE, setShipperUOE] = useState("");


  return (
    <div className="step-container">
      <div className="step">
        <h2>Shipper Details</h2>
        <NameAndAddress
          prefix="shipper"
          onFNameChange={setShipperFName}
          onLNameChange={setShipperLName}
          onAddress1Change={setShipperAddress1}
          onAddress2Change={setShipperAddress2}
          onCityChange={setShipperCity}
          onStateChange={setShipperState}
          onCountryChange={setShipperCountry}
          onEmailChange={setShipperEmail}
          onPhoneChange={setShipperPhone}
        />
        <label htmlFor="shipperCIN">CIN:</label>
        <input type="text" id="shipperCIN" value={shipperCIN} onChange={(e) => setShipperCIN(e.target.value)} required/>

        <label htmlFor="shipperUOE">UOE Number:</label>
        <input type="text" id="shipperUOE" value={shipperUOE} onChange={(e) => setShipperUOE(e.target.value)} required/>

        <div className="firstnavigation">
          <button type="button" className="next" onClick={() => nextStep(1)}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShipperDetails;


