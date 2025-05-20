import {Stack, Typography, TextField, TextFieldProps} from '@mui/material'

export interface CommonInputProps {
    label: string
    placeholder?: string
    unitLabel?: string
    type?: React.HTMLInputTypeAttribute
    disableNumberSpinner?: boolean
    value?: string | number
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    InputProps?: TextFieldProps['InputProps']
    error?: boolean
    helperText?: React.ReactNode
}

const CommonInput = ({
    label,
    placeholder = '',
    unitLabel = '',
    type = 'text',
    disableNumberSpinner = false,
    value,
    onChange,
    InputProps,
    error = false,
    helperText,
}: CommonInputProps) => (
    <Stack spacing={1} sx={{width: '100%'}}>
        <Typography variant='subtitle1' fontWeight='bold'>
            {label}
        </Typography>
        <TextField
            variant='outlined'
            placeholder={placeholder}
            type={type}
            value={value ?? ''}
            onChange={onChange}
            InputProps={InputProps}
            error={error}
            helperText={helperText}
            sx={{
                ...(disableNumberSpinner && type === 'number'
                    ? {
                          '& input[type=number]::-webkit-outer-spin-button,': {
                              '-webkit-appearance': 'none',
                              margin: 0,
                          },
                          '& input[type=number]::-webkit-inner-spin-button,': {
                              '-webkit-appearance': 'none',
                              margin: 0,
                          },
                          '& input[type=number]': {
                              '-moz-appearance': 'textfield',
                          },
                      }
                    : {}),
            }}
        />
        {unitLabel && (
            <Typography variant='body2' color='text.secondary'>
                {unitLabel}
            </Typography>
        )}
    </Stack>
)

export default CommonInput
