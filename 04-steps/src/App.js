import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  // Step 1 create a state variable to keep track of the current step (steps for state variable and setStep for the function to update the state variable)
  // can use useState only in top level of the component, not inside any function or condition or loop etc.
  // useState is a hook that lets you add state to your function components
  // should only update state using the function returned by useState
  // never update state directly, always use the function returned by useState
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  // Callback functions to handle the button clicks (Previous and Next)
  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }

  function handleNext() {
    if (step < 3) setStep(step + 1);
  }

  // Step 2 is using the state variable to display the current step
  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>
      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>
      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
