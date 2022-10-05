import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink/AppLink'
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkVariant.SECONDARY} to='/'>Home</AppLink>
        <AppLink theme={AppLinkVariant.SECONDARY} to='/about'>About</AppLink>
      </div>
    </div>
  )
}
