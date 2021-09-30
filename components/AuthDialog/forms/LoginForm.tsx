import { Button, TextField } from '@material-ui/core'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { FormField } from '../..'

interface ILoginForm {
    onOpenRegister: () => void
}

export const LoginFormSchema = yup.object().shape({
    email: yup.string().email('Неверная почта').required('Почта обязательная'),
    password: yup.string().min(6, 'Поле обязательно для заполнения').required('Поле обязательно для заполнения')
})

const LoginForm: React.FC<ILoginForm> = ({ onOpenRegister }) => {
    const form = useForm({
        mode: 'onChange',
        resolver: yupResolver(LoginFormSchema)
    })

    const onSubmit = (data: any) => {
        alert('kdnsk')
    }

    return (
        <div>
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField name="email" label="Почта" />
                    <FormField name="password" label="Пароль" />
                    <div className="d-flex align-center justify-between">
                        <Button
                            type="submit"
                            color="primary"
                            variant="contained">
                            Войти
                        </Button>
                        <Button color="primary"
                            variant="text"
                            onClick={onOpenRegister} >
                            Регистрация
                        </Button>
                    </div>
                </form>
            </FormProvider>
        </div>
    )
}

export default LoginForm
