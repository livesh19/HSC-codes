import React, { useState } from "react";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import ShipperDetails from "./components/ShipperDetails";
import ConsigneeDetails from "./components/ConsigneeDetails";
import NotifyParties from "./components/NotifyParties";
import ShipmentDetails from "./components/ShipmentDetails";
import CarrierDetails from "./components/CarrierDetails";
import "./App.css";

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState(new Set());
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const showStep = (step) => {
    if (step > currentStep && !completedSteps.has(step - 1)) {
      alert("Please complete the current step before proceeding.");
      return;
    }
    setCurrentStep(step);
    setIsMenuOpen(false); // Close menu on step change
  };

  const nextStep = (step) => {
    if (step < 5) {
      setCompletedSteps((prev) => new Set([...prev, step]));
      setCurrentStep(step + 1);
    }
  };

  const prevStep = (step) => {
    if (step > 1) {
      setCurrentStep(step - 1);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      <Header toggleMenu={toggleMenu} />
      <div className="main-layout">
        <SideMenu
          currentStep={currentStep}
          showStep={showStep}
          completedSteps={completedSteps}
          isMenuOpen={isMenuOpen}
        />
        <main className={`container ${isMenuOpen ? "menu-open" : ""}`}>
          {currentStep === 1 && <ShipperDetails nextStep={nextStep} />}
          {currentStep === 2 && <ConsigneeDetails nextStep={nextStep} prevStep={prevStep} />}
          {currentStep === 3 && <NotifyParties nextStep={nextStep} prevStep={prevStep} />}
          {currentStep === 4 && <ShipmentDetails nextStep={nextStep} prevStep={prevStep} />}
          {currentStep === 5 && <CarrierDetails prevStep={prevStep} />}
        </main>
      </div>
    </div>
  );
};

export default App;