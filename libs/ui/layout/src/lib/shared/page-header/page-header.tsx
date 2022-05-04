import { BrandLogoLink } from '@scorecerer/ui/assets';

/* eslint-disable-next-line */
export interface PageHeaderProps {}

export function PageHeader(props: PageHeaderProps) {
  return (
    <header className="bg-gray-800">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <BrandLogoLink></BrandLogoLink>
        </div>
      </div>
    </header>
  );
}

export default PageHeader;
