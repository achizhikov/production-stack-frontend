import { useState } from 'react'
import { ThemeSwitch } from 'shared/ui/ThemeSwitch'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed(!collapsed) // prev => !prev
  }

  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className
      ])}>
      <button onClick={onToggle}>TOGGLE</button>
      <div className={cls.switchers}>
        <ThemeSwitch />
      </div>
    </div>
  )
}
