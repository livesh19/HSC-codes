import React, { useState } from "react";
import HSCodeSearch from "./HSCodeSearch";

const ShipmentDetails = ({ nextStep, prevStep }) => {
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");
    const [containerDetails, setContainerDetails] = useState("");
    const [goodsDescription, setGoodsDescription] = useState("");
    const [totalBags, setTotalBags] = useState(0);
    const [netWeight, setNetWeight] = useState(0);
    const [grossWeight, setGrossWeight] = useState(0);
    const [hsCode, setHsCode] = useState("");
    const [shippedOnBoardDate, setShippedOnBoardDate] = useState("");
    const [sbNo, setSbNo] = useState("");
    const [cargoStatus, setCargoStatus] = useState("");

    return (
        <div className="step">
            <h2>Shipment Details</h2>
            <label htmlFor="origin">Origin</label>
            <input type="text" id="origin" name="origin" required />

            <label htmlFor="destination">Destination</label>
            <input type="text" id="destination" name="destination" required />

            <label htmlFor="containerDetails">Container Details</label>
            <input type="text" id="containerDetails" name="containerDetails" required />

            <label htmlFor="goodsDescription">Goods Description</label>
            <textarea id="goodsDescription" name="goodsDescription" required></textarea>

            <label htmlFor="totalBags">Total Bags</label>
            <input type="number" id="totalBags" name="totalBags" required />

            <label htmlFor="netWeight">Net Weight (KGS)</label>
            <input type="number" step="0.001" id="netWeight" name="netWeight" required />

            <label htmlFor="grossWeight">Gross Weight (KGS)</label>
            <input type="number" step="0.001" id="grossWeight" name="grossWeight" required />

            <label htmlFor="hsCode">HS Code</label>
            <HSCodeSearch onSelect={(code) => setHsCode(code)} />

            <label htmlFor="shippedOnBoardDate">Shipped On Board Date</label>
            <input type="date" id="shippedOnBoardDate" name="shippedOnBoardDate" required />

            <label htmlFor="sbNo">SB No</label>
            <input type="text" id="sbNo" name="sbNo" required />

            <label htmlFor="cargoStatus">Cargo Status</label>
            <input type="text" id="cargoStatus" name="cargoStatus" required />

            <div className="navigation">
                <button type="button" className="previous" onClick={() => prevStep(4)}>Previous</button>
                <button type="button" className="next" onClick={() => nextStep(4)}>Next</button>
            </div>
        </div>
    );
};

export default ShipmentDetails;