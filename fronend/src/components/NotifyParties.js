import React from "react";

const NotifyParties = ({ nextStep, prevStep }) => {
    return (
        <div className="step">
            <div className="notify-party">
                <label htmlFor="notifyParty1">Notify Party 1:</label>
                <input type="text" id="notifyParty1" name="notifyParty1" placeholder="Name" />
                <input type="text" id="notifyParty1Address" name="notifyParty1Address" placeholder="Address" />
                <input type="email" id="notifyParty1Email" name="notifyParty1Email" placeholder="Email"/>
            </div>
            <div className="notify-party">
                <label htmlFor="notifyParty2">Notify Party 2:</label>
                <input type="text" id="notifyParty2" name="notifyParty2" placeholder="Name"/>
                <input type="text" id="notifyParty2Address" name="notifyParty2Address" placeholder="Address"/>
            </div>
            <div className="notify-party">
                <label htmlFor="notifyParty3">Notify Party 3:</label>
                <input type="text" id="notifyParty3" name="notifyParty3" placeholder="Name"/>
                <input type="text" id="notifyParty3Address" name="notifyParty3Address" placeholder="Address"/>
            </div>

            <div className="navigation">
                <button type="button" className="previous" onClick={() => prevStep(3)}>Previous</button>
                <button type="button" className="next" onClick={() => nextStep(3)}>Next</button>
            </div>
        </div>
    );
};

export default NotifyParties;