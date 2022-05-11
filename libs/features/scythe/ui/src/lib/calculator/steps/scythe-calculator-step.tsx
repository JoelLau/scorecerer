import { Card, FormControl, FormControlProps } from '@scorecerer/ui/components';
import { PageLayoutStacked, PageTitle } from '@scorecerer/ui/layout';
import { BaseSyntheticEvent, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { scytheCalculatorBreadcrumbPieces } from '../scythe-calculator-breadcrumb-pieces.config';
import ScytheCalculatorStepButton from './scythe-calculator-step-button';
import { scytheCalculatorSteps } from './scythe-calculator-steps.config';

export interface ScytheCalculatorStepProps {
  children?: ReactNode | ReactNode[];
  formControl?: FormControlProps;
  className?: string;
  onSubmit?: (event: BaseSyntheticEvent) => unknown;
  currentIndex?: number;
  steps?: typeof scytheCalculatorSteps;
}

export function ScytheCalculatorStep({
  children,
  className,
  formControl,
  onSubmit,
  currentIndex,
  steps,
}: ScytheCalculatorStepProps) {
  const onFormSubmitHandler = (event: BaseSyntheticEvent) => {
    if (onSubmit) {
      onSubmit(event);
    }
  };

  const nextStep = (steps || [])[(currentIndex || 0) + 1];
  const previousStep = (steps || [])[(currentIndex || 0) - 1];
  const isLastStep = !!steps && (steps || []).length - 1 === currentIndex;

  const navigate = useNavigate();

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
                <div className="flex flex-col w-full gap-y-1">
                  <FormControl
                    {...formControl}
                    {
                      /** set autofocus wherever possible */
                      ...(formControl.variant === 'number' ||
                      formControl.variant === 'text'
                        ? { autoFocus: true }
                        : {})
                    }
                  />
                </div>
              )}
              <div className="flex flex-col w-full gap-y-2">
                {
                  <>
                    {!nextStep && !previousStep && (
                      <ScytheCalculatorStepButton variant="getting-started" />
                    )}
                    {nextStep && <ScytheCalculatorStepButton variant="next" />}
                    {!isLastStep && previousStep && (
                      <ScytheCalculatorStepButton
                        variant="previous"
                        onClick={() => navigate(`../${previousStep.id}`)}
                      />
                    )}
                    {isLastStep && (
                      <ScytheCalculatorStepButton variant="final" />
                    )}
                  </>
                }
              </div>
            </>
          }
        </form>
      </Card>
    </PageLayoutStacked>
  );
}

export default ScytheCalculatorStep;
