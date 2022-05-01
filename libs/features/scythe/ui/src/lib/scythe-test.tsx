import { Button, Typography } from '@scorecerer/ui/components';

/* eslint-disable-next-line */
export interface ScytheTestProps {}

export function ScytheTest(props: ScytheTestProps) {
  return (
    <div className="p-4">
      <h1>
        <Typography variant="h1">Hello World</Typography>
      </h1>
      <Button variant="primary">
        <Typography variant="button">Button</Typography>
      </Button>
    </div>
  );
}

export default ScytheTest;
