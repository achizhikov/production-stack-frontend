import { useTranslation } from 'react-i18next'
import i18n from 'shared/config/i18n/i18n'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonVariant } from 'shared/ui/Button'

interface LangSwitchProps {
  className?: string
  short?: boolean
}

export const LangSwitch = ({ className, short }: LangSwitchProps) => {
  const { t } = useTranslation()

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
  }

  return (
    <Button
      className={classNames('', {}, [className])}
      variant={ButtonVariant.CLEAR_INVERTED}
      onClick={toggle}
    >
      {t(short ? 'Short Lang' : 'Lang')}
    </Button>
  )
}
