import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { LangSwitch } from 'widgets/LangSwitch';
import { ThemeSwitch } from 'widgets/ThemeSwitch';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed(!collapsed); // prev => !prev
  };

  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button onClick={onToggle}>{t('Toggle')}</Button>
      <div className={cls.switchers}>
        <ThemeSwitch />
        <LangSwitch className={cls.lang} />{' '}
      </div>
    </div>
  );
};
