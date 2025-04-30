import {Typography, Slider, Box} from '@mui/material'
import {styled} from '@mui/material/styles'

const StyledSlider = styled(Slider)(({theme}) => ({
    '& .MuiSlider-rail': {
        backgroundColor: theme.palette.grey[400],
    },
    '& .MuiSlider-valueLabel': {
        padding: '3px 6px',
        fontSize: '12px',
    },
}))

interface BaseSliderInputProps {
    label: string
    unit: string
    defaultValue: number
    min: number
    max: number
    step?: number
    valueLabelFormat?: (value: number) => string
    value?: number | number[]
}

const BaseSliderInput = ({
    label,
    unit,
    defaultValue,
    min,
    max,
    step,
    valueLabelFormat,
    value,
}: BaseSliderInputProps) => (
    <Box>
        <Typography variant='subtitle1' fontWeight='bold'>
            {label}
        </Typography>
        <StyledSlider
            defaultValue={defaultValue}
            min={min}
            max={max}
            step={step}
            valueLabelDisplay='on'
            valueLabelFormat={valueLabelFormat}
            value={value}
            aria-label={label}
        />
        <Typography variant='body2' color='text.secondary'>
            단위: {unit}
        </Typography>
    </Box>
)

export default BaseSliderInput
