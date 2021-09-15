import { Button, Divider, Paper, TextField, Typography } from '@material-ui/core'
import React from 'react'
import { MainLayout } from '../../components'

interface ISettings { }

const Settings: React.FC<ISettings> = () => {
    return (
        <MainLayout hideComments>
            <Paper className="p-20" elevation={0}>
                <Typography variant="h6">
                    Основные настройки
                </Typography>
                <Divider className="mt-20 mb-30" />
                <form>
                    <TextField
                        className="mb-20"
                        size="small"
                        label="Имя"
                        variant="outlined"
                        fullWidth
                        required
                    />
                    <TextField
                        className="mb-20"
                        size="small"
                        label="Эл. почта"
                        variant="outlined"
                        fullWidth
                        required
                    />
                    <TextField
                        size="small"
                        label="Пароль"
                        variant="outlined"
                        fullWidth
                        required />
                    <Divider className="mt-30 mb-20" />
                    <Button color="primary" variant="contained">
                        Сохранить
                    </Button>
                </form>
            </Paper>
        </MainLayout>
    )
}

export default Settings
