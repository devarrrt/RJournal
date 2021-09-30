import { TextField } from '@material-ui/core'
import React from 'react'

interface IFormField {
    name: string
    label: string
}

const FormField: React.FC<IFormField> = ({ name, label }) => {
    return (
        <TextField
            name={name}
            className="mb-20"
            size="small"
            label={label}
            variant="outlined"
            // error={!!formState.errors[name]?.message}
            // helperText={formState.errors[name]?.message}
            fullWidth
        />
    )
}

export default FormField
