import { HatWizardIcon } from '@scorecerer/ui/assets';
import { Typography } from '@scorecerer/ui/components';
import { Link } from 'react-router-dom';

/* eslint-disable-next-line */
export interface PageHeaderProps {}

export function PageHeader(props: PageHeaderProps) {
  return (
    <header className="bg-gray-800">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center justify-start flex-shrink-0 gap-4 text-white"
            >
              <HatWizardIcon className="w-6 h-6 fill-white"></HatWizardIcon>
              <Typography variant="brand-logo" className="mt-1">
                Scorecerer
              </Typography>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default PageHeader;
