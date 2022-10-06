import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkVariant.SECONDARY} to='/'>{t('Home')}</AppLink>
        <AppLink theme={AppLinkVariant.SECONDARY} to='/about'>{t('About')}</AppLink>
      </div>
    </div>
  );
};
