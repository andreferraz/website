import Page from '@/components/page';
import { LayoutProps } from '@/utils/typings/LayoutProps';

export const HomeLayout = (props: LayoutProps) => {
  return (
    <Page {...props}>
      <h1>Home</h1>
    </Page>
  );
};
