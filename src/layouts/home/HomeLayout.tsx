import ArticlesList from '@/components/articles-list';
import ClientsList from '@/components/clients-list';
import IntroSection from '@/components/intro-section';

export const HomeLayout = () => {
  return (
    <div>
      <IntroSection className="pt-25 mb-25 lg:pt-35 lg:mb-35" />

      <ClientsList className="mb-25" />

      <ArticlesList className="mb-25" />
    </div>
  );
};
