import {Stack, Typography, TextField} from '@mui/material'

export interface CommonInputProps {
    label: string
    placeholder?: string
    unitLabel?: string
    type?: React.HTMLInputTypeAttribute
    disableNumberSpinner?: boolean
}

const CommonInput = ({
    label,
    placeholder = '',
    unitLabel = '',
    type = 'text',
    disableNumberSpinner = false,
}: CommonInputProps) => (
    <Stack spacing={1} sx={{width: '100%'}}>
        <Typography variant='subtitle1' fontWeight='bold'>
            {label}
        </Typography>
        <TextField
            variant='outlined'
            placeholder={placeholder}
            type={type}
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
