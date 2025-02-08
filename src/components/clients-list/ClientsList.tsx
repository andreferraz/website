import { useTranslations } from 'next-intl';

interface ClientsListProps {
  className?: string;
}

const brands = [
  'Unilever',
  'Danone',
  'Clarins',
  'Nestlé',
  'Pepsico',
  'Motorola',
  'Campari',
  'Reckitt Benckiser',
  'Royal Canin',
  'T-Mobile',
];

export const ClientsList = ({ className = '' }: ClientsListProps) => {
  const t = useTranslations('brands-list');

  return (
    <div className={`${className}`}>
      <div className="container">
        <h2 className="block mb-7">{t('title')}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full">
          <div>
            <p className="lead mb-6">{t('text')}</p>
          </div>
          <div>
            <ul className="columns-2 lg:ps-12 lg:pe-0 xl:px-10">
              {brands.map((brand) => (
                <li className="text-3xl mb-4 xl:mb-5" key={brand}>
                  {brand}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
