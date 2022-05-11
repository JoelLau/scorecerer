import {
  Card,
  FormControl,
  FormControlProps,
  Typography,
} from '@scorecerer/ui/components';
import { PageLayoutStacked, PageTitle } from '@scorecerer/ui/layout';
import { BaseSyntheticEvent, ReactNode, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { scytheCalculatorBreadcrumbPieces } from '../scythe-calculator-breadcrumb-pieces.config';
import ScytheCalculatorStepButton from './scythe-calculator-step-button';
import { scytheCalculatorSteps } from './scythe-calculator-steps.config';

export interface ScytheCalculatorStepProps {
  children?: ReactNode | ReactNode[];
  formControl?: FormControlProps;
  className?: string;
  onSubmit?: (event: BaseSyntheticEvent) => unknown;
  onChange?: (event: BaseSyntheticEvent) => unknown;
  currentIndex?: number;
  steps?: typeof scytheCalculatorSteps;
  value?: any;
  validator?: (value: string) => string[];
}

export function ScytheCalculatorStep({
  children,
  className,
  formControl,
  onSubmit,
  onChange,
  currentIndex,
  steps,
  value,
  validator,
}: ScytheCalculatorStepProps) {
  const [, setHasSubmitAttempt] = useState(false);
  const [showErrorMessages, setShowErrorMessages] = useState(false);

  const onFormSubmitHandler = (event: BaseSyntheticEvent) => {
    // manually override for easier access on parent component
    event.target.value = value;

    setHasSubmitAttempt(true);
    setShowErrorMessages(true);

    if (onSubmit) {
      onSubmit(event);
    }
  };

  const onChangeHandler = (event: BaseSyntheticEvent) => {
    if (!errors || errors.length <= 0) {
      setShowErrorMessages(true);
    }

    if (onChange) {
      onChange(event);
    }
  };

  const nextStep = (steps || [])[(currentIndex || 0) + 1];
  const previousStep = (steps || [])[(currentIndex || 0) - 1];
  const isLastStep = !!steps && (steps || []).length - 1 === currentIndex;

  const showGettingStarted = !nextStep && !previousStep;
  const showNextStep = nextStep;
  const showPreviousStep = !isLastStep && previousStep;
  const showLastStep = isLastStep;

  const showButtonContainer =
    showGettingStarted || showNextStep || showPreviousStep || showLastStep;

  const navigate = useNavigate();

  const errors: string[] = useMemo(() => {
    if (!validator) {
      return [];
    }

    return validator(value);
  }, [value, validator]);

  return (
    <PageLayoutStacked>
      <PageTitle breadcrumbPieces={scytheCalculatorBreadcrumbPieces}>
        Scythe Score Calculator
      </PageTitle>
      <Card>
        <form
          className={
            'flex flex-col items-start w-full pt-3 justify-evenly gap-y-10 ' +
              className || ''
          }
          onSubmit={onFormSubmitHandler}
        >
          {
            <>
              {children}
              {formControl && (
                <div className="flex flex-col w-full gap-y-3">
                  <FormControl
                    {...formControl}
                    value={value}
                    onChange={onChangeHandler}
                    {
                      /** set autofocus wherever possible */
                      ...(formControl.variant === 'number' ||
                      formControl.variant === 'text'
                        ? { autoFocus: true }
                        : {})
                    }
                  />
                  {showErrorMessages &&
                    errors &&
                    errors.map((errorText, index) => (
                      <Typography
                        key={index}
                        variant="error"
                        className="pl-2 pr-4"
                      >
                        {errorText}
                      </Typography>
                    ))}
                </div>
              )}
              {showButtonContainer && (
                <div className="flex flex-col w-full gap-y-2">
                  {
                    <>
                      {showGettingStarted && (
                        <ScytheCalculatorStepButton variant="getting-started" />
                      )}
                      {showNextStep && (
                        <ScytheCalculatorStepButton variant="next" />
                      )}
                      {showPreviousStep && (
                        <ScytheCalculatorStepButton
                          variant="previous"
                          onClick={() => navigate(`../${previousStep.id}`)}
                        />
                      )}
                      {showLastStep && (
                        <ScytheCalculatorStepButton variant="final" />
                      )}
                    </>
                  }
                </div>
              )}
            </>
          }
        </form>
      </Card>
    </PageLayoutStacked>
  );
}

export default ScytheCalculatorStep;
