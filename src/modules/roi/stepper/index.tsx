import React, { useState } from "react";
import dynamic from "next/dynamic";
import * as Styled from "./stepper.styles";
import * as Step from "./items";
import Image from "next/image";

const StepperComponent = dynamic(() => import("@/components/Stepper"), {
  ssr: false,
});

const steps = [
  { label: "Organizational Information" },
  { label: "Cost & Income Information" },
  { label: "Benefits" },
  { label: "Results" },
];

export const ROIStepper: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = (step: number) => {
    setActiveStep(step + 1);
  };

  const handleBack = (step: number) => {
    setActiveStep(step - 1);
  };

  const stepComp = [
    <Step.OrgInfo onNext={handleNext} key={0} />,
    <Step.CostInfo onNext={handleNext} onBack={handleBack} key={1} />,
    <Step.Benefits onNext={handleNext} onBack={handleBack} key={2} />,
    <Step.Results key={3} />,
  ];
  return (
    <Styled.ROIStepperWrapper>
      <StepperComponent steps={steps} activeStep={activeStep} />
      <Styled.ROIStepperContainer>
        {stepComp[activeStep]}
        <p>
          {
            "Although great care has been taken to ensure the accuracy and completeness of results derived from this tool, this tool should be used for informational purposes only, and Classe365 makes no warranties, express, implied or statutory, as to the information generated by the tool or any organization’s achievement of the potential benefits estimated by using Classe365 solutions or products. Use, disclosure or reproduction of this tool is prohibited without the prior written permission of Classe365"
          }
        </p>
        <Styled.ROIShapeContainer>
          <Image
            src={"/assets/images/shapes/Analytics.png"}
            alt="shape-1"
            width={48}
            height={48}
            className="shape-1"
          />
          <Image
            src={"/assets/images/shapes/Finance.png"}
            alt="shape-2"
            width={48}
            height={48}
            className="shape-2"
          />
          <Image
            src={"/assets/images/shapes/CRM.png"}
            alt="shape-3"
            width={48}
            height={48}
            className="shape-3"
          />
          <Image
            src={"/assets/images/shapes/Schedules & communication.png"}
            alt="shape-4"
            width={48}
            height={48}
            className="shape-4"
          />
        </Styled.ROIShapeContainer>
      </Styled.ROIStepperContainer>
    </Styled.ROIStepperWrapper>
  );
};
