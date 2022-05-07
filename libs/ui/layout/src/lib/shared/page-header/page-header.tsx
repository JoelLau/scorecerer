import { BrandLogoLink } from '@scorecerer/ui/assets';

/* eslint-disable-next-line */
export interface PageHeaderProps {}

export const PageHeader = (props: PageHeaderProps) => {
  return (
    <header className="bg-transparent">
      <div className="mx-auto">
        <div className="flex items-center justify-between h-16 px-8">
          <BrandLogoLink></BrandLogoLink>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
