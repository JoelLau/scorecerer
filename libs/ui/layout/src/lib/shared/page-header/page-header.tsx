import { HatWizardIcon } from '@scorecerer/ui/assets';
import { Typography } from '@scorecerer/ui/components';
import { Link } from 'react-router-dom';

/* eslint-disable-next-line */
export interface PageHeaderProps {}

export function PageHeader(props: PageHeaderProps) {
  return (
    <header className="flex justify-between px-4 pt-8 xl:px-20 md:px-10">
      <Link to="/" className="flex items-center justify-start gap-2 px-4">
        <HatWizardIcon className="w-6 h-6 fill-white"></HatWizardIcon>
        <Typography variant="brand-logo">Scorecerer</Typography>
      </Link>
    </header>
  );
}

export default PageHeader;
