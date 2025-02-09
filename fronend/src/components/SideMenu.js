import React from "react";

const SideMenu = ({ currentStep, showStep, completedSteps,isMenuOpen  }) => {
  return (
    <aside className={`side-menu ${isMenuOpen ? "open" : ""}`}>
      <ul className="tree">
        <li>
          <span>Bill of Lading</span>
          <ul>
            {[1, 2, 3, 4, 5].map((step) => (
              <li key={step}>
                <a
                  href="#"
                  className={`${step > currentStep ? "disabled" : ""} ${
                    step === currentStep ? "active" : ""
                  }`}
                  onClick={() => showStep(step)}
                >
                  {step === 1 && "Shipper Details"}
                  {step === 2 && "Consignee Details"}
                  {step === 3 && "Notify Parties"}
                  {step === 4 && "Shipment Details"}
                  {step === 5 && "Carrier Details"}
                </a>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </aside>
  );
};

export default SideMenu;