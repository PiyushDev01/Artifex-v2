import Formcontext from "./FormContex";
import { useState } from "react";


const FormContextProvider = ({ children }) => {
    const [step, setStep] = useState("0%");
    const [currentStep, setCurrentStep] = useState(1);
    const [is_F1_Invalide, setFormOneValid] = useState({ size: false, orientation: false, file: false });
    const [is_F2_Invalide, setFormTWOValid] = useState({ name: false, phone: false, saveas: false, flat: false, street: false, district: false, state: false, pin: false });
    
    const steps = [
        { label: "Order" },
        { label: "Address" },
        { label: "Payment" },
        
    ];

    

    const move = (direction) => {
        let newStep;
        let newCurrentStep = currentStep + direction;

        if (newCurrentStep < 1) {
            newCurrentStep = 1;
        } else if (newCurrentStep > steps.length) {
            newCurrentStep = steps.length;
        }

        newStep = `${((newCurrentStep - 1) / (steps.length - 1)) * 100}%`;

        setStep(newStep);
        setCurrentStep(newCurrentStep);
    };

    return (
        <Formcontext.Provider value={{
            step,
            currentStep,
            steps,
            move,
            is_F1_Invalide,
            setFormOneValid,
            is_F2_Invalide,
            setFormTWOValid
           

        }}>
            {children}
        </Formcontext.Provider>
    );
}

export default FormContextProvider;