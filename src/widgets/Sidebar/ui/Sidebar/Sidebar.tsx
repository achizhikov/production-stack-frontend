import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonVariant } from 'shared/ui/Button'
import { LangSwitch } from 'widgets/LangSwitch'
import { ThemeSwitch } from 'widgets/ThemeSwitch'
import cls from './Sidebar.module.scss'
import { ButtonSize } from 'shared/ui/Button/ui/Button'
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import AboutIcon from 'shared/assets/icons/about.svg'
import MainIcon from 'shared/assets/icons/main.svg'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const { t } = useTranslation()
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed(!collapsed) // prev => !prev
  }

  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className
      ])}
    >
      <div className={cls.items}>
        <AppLink
          className={cls.item}
          theme={AppLinkVariant.SECONDARY}
          to={RoutePath.main}
        >
          <MainIcon className={cls.icon} />
          <span className={cls.link}>{t('Main')}</span>
        </AppLink>
        <AppLink
          className={cls.item}
          theme={AppLinkVariant.SECONDARY}
          to={RoutePath.about}
        >
          <AboutIcon className={cls.icon} />
          <span className={cls.link}>{t('About')}</span>
        </AppLink>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitch />
        <LangSwitch className={cls.lang} short={collapsed} />
      </div>
      <Button
        className={cls.collapseBtn}
        variant={ButtonVariant.BACKGROUND_INVERTED}
        onClick={onToggle}
        size={ButtonSize.L}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>
    </div>
  )
}
