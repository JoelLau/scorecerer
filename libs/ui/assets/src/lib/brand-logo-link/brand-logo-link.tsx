import { Typography } from '@scorecerer/ui/components';
import { Link } from 'react-router-dom';
import HatWizardIcon from '../icons/hat-wizard-icon/hat-wizard-icon';

/* eslint-disable-next-line */
export interface BrandLogoLinkProps {}

export function BrandLogoLink(props: BrandLogoLinkProps) {
  return (
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
  );
}

export default BrandLogoLink;
