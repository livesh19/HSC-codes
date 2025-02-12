import React, { useState } from "react";
import NameAndAddressDetails from "./NameAndAddressDetails";
import axios from "axios";

const ShipperDetails = ({ nextStep }) => {
  const [shipperfname, setShipperFName] = useState("");
  const [shipperlname, setShipperLName] = useState("");
  const [shipper_address1, setShipperAddress1] = useState("");
  const [shipper_address2, setShipperAddress2] = useState("");
  const [shipper_city, setShipperCity] = useState("");
  const [shipper_state, setShipperState] = useState("");
  const [shipper_country, setShipperCountry] = useState("");
  const [shipper_email, setShipperEmail] = useState("");
  const [shipper_phone, setShipperPhone] = useState("");
  const [shippercin, setShipperCIN] = useState("");
  const [shipperuoeno, setShipperUOENo] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSaveShipperDetails = async () => {
    const shipperData = {
      shipperfname,
      shipperlname,
      shipperAddress1: shipper_address1, // Map React field to Java entity field
    shipperAddress2: shipper_address2, // Map React field to Java entity field
    shipperCity: shipper_city, // Map React field to Java entity field
    shipperState: shipper_state, // Map React field to Java entity field
    shipperCountry: shipper_country, // Map React field to Java entity field
    shipperEmail: shipper_email, // Map React field to Java entity field
    shipperPhone: shipper_phone, // Map React field to Java entity field
    shipperCIN: shippercin, // Map React field to Java entity field
    shipperUOENo: shipperuoeno, // Map React field to Java entity field
    };

    console.log("Shipper Data:", shipperData); // Debugging log

    try {
      setLoading(true);
      setError(null);
      const response = await axios.post("/api/bill-of-lading/shipper", shipperData);
      setSuccess(true);
      console.log("Shipper details saved successfully:", response.data);
      nextStep(1);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to save shipper details.");
      console.error("Error saving shipper details:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="step-container">
      <div className="step">
        <h2>Shipper Details</h2>
        <NameAndAddressDetails
          prefix="shipper"
          fName={shipperfname}
          lName={shipperlname}
          address1={shipper_address1}
          address2={shipper_address2}
          city={shipper_city}
          state={shipper_state}
          country={shipper_country}
          email={shipper_email}
          phone={shipper_phone}
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
        <label htmlFor="shippercin">CIN:</label>
        <input
          type="text"
          id="shippercin"
          value={shippercin}
          onChange={(e) => setShipperCIN(e.target.value)}
          required
        />
        <label htmlFor="shipperuoeno">UOE Number:</label>
        <input
          type="text"
          id="shipperuoeno"
          value={shipperuoeno}
          onChange={(e) => setShipperUOENo(e.target.value)}
          required
        />
        <div className="navigation">
          <button
            type="button"
            className="next"
            onClick={handleSaveShipperDetails}
            disabled={loading}
          >
            {loading ? "Saving..." : "Next"}
          </button>
        </div>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">Shipper details saved successfully!</p>}
      </div>
    </div>
  );
};

export default ShipperDetails;
