import {Stack, Typography, TextField} from '@mui/material'

export interface CommonInputProps {
    label: string
    placeholder?: string
    unitLabel?: string
    type?: React.HTMLInputTypeAttribute
}

const CommonInput = ({
    label,
    placeholder = '',
    unitLabel = '',
    type = 'text',
}: CommonInputProps) => (
    <Stack spacing={1} sx={{width: '100%'}}>
        <Typography variant='subtitle1' fontWeight='bold'>
            {label}
        </Typography>
        <TextField variant='outlined' placeholder={placeholder} type={type} />
        {unitLabel && (
            <Typography variant='body2' color='text.secondary'>
                {unitLabel}
            </Typography>
        )}
    </Stack>
)

export default CommonInput
