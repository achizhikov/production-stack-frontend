import { Theme, useTheme } from 'app/providers/ThemeProvider'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { Button, ButtonVariant } from 'shared/ui/Button/ui/Button'
import { classNames } from 'shared/lib/classNames/classNames'

interface ThemeSwitchProps {
  className?: string
}

export const ThemeSwitch = ({ className }: ThemeSwitchProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      variant={ButtonVariant.CLEAR}
      className={classNames('', {}, [className])}
      onClick={() => toggleTheme(theme)}>
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}{' '}
    </Button>
  )
}
