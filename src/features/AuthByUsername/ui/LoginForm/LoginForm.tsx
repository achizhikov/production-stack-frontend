import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonVariant } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input'
import cls from './LoginForm.module.scss'

interface LoginFormProps {
  className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        type='text'
        className={cls.input}
        placeholder={t('Enter username:')}
      />
      <Input
        type='text'
        className={cls.input}
        placeholder={t('Enter password:')}
      />
      <Button className={cls.loginBtn} variant={ButtonVariant.OUTLINE}>
        {t('Login')}
      </Button>
    </div>
  )
}
