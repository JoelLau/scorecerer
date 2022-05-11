import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ScytheCalculatorStepScore from './scythe-calculator-step-score';

const defaultProps = {
  firstStepUrl: 'test',
  scorePieces: {
    playerCount: 0,
    faction: '',
    popularity: 0,
    stars: 0,
    territories: 0,
    resources: 0,
    structureBonus: 0,
    encounterTerritories: 0,
  },
};

describe(`given 'ScytheCalculatorStepScore'`, () => {
  it(`should render successfully`, () => {
    const { baseElement } = render(
      <ScytheCalculatorStepScore {...defaultProps} />,
      { wrapper: MemoryRouter }
    );
    expect(baseElement).toBeTruthy();
  });
});
