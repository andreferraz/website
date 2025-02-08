import ClientsList from '@/components/clients-list';
import IntroSection from '@/components/intro-section';

export const HomeLayout = () => {
  return (
    <div>
      <IntroSection className="py-25 lg:mb-20" />

      <ClientsList className="mb-10 md:mb-15" />
    </div>
  );
};
