import { Button } from '@material-ui/core'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormField } from '../..'
import { LoginFormSchema } from './LoginForm'

interface IRegisterForm {
    onOpenRegister: () => void
    onOpenLogin: () => void
}

export const RegisterFormSchema = yup.object().shape({
    fullname: yup.string().required('Имя и фамилия обязательны')
}).concat(LoginFormSchema)

const RegisterForm: React.FC<IRegisterForm> = ({ onOpenRegister, onOpenLogin }) => {
    const form = useForm({
        mode: 'onChange',
        resolver: yupResolver(RegisterFormSchema),
    });

    const onSubmit = (data: any) => console.log(data)

    return (
        <div>
            <FormProvider {...form}>
                <FormField name="fullname" label="Имя и фамилия" />
                <FormField name="email" label="Почта" />
                <FormField name="password" label="Пароль" />
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="d-flex align-center justify-between">
                        <Button
                            onClick={onOpenRegister}
                            type="submit"
                            color="primary"
                            variant="contained">
                            Зарегистрироваться
                        </Button>
                        <Button color="primary" variant="text" onClick={onOpenLogin}>
                            Войти
                        </Button>
                    </div>
                </form>
            </FormProvider>
        </div>
    )
}

export default RegisterForm
