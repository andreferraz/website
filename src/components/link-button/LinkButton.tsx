import { Link } from '@/i18n/routing';

interface LinkButtonProps {
  className?: string;
  children: React.ReactNode;
  href: string;
  isHighlighted?: boolean;
}

export const LinkButton = ({
  className = '',
  children,
  href,
  isHighlighted = false,
}: LinkButtonProps) => {
  return (
    <Link
      href={href}
      {...(isHighlighted ? { 'data-highlighted': '' } : {})}
      className={`${className} inline-flex items-center uppercase font-semibold underline`}
    >
      <span className="flex items-center justify-center">{children}</span>
    </Link>
  );
};
