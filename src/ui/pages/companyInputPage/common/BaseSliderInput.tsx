import {useCallback} from 'react'
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
    value: number
    /** 값 변경 시 호출, 새로운 값이 인자로 넘어옴 */
    onChange: (value: number) => void
    min: number
    max: number
    step?: number
    /** valueLabelFormat 커스텀 */
    valueLabelFormat?: (value: number) => string
}

// 슬라이더 기반 입력 컴포넌트
const BaseSliderInput = ({
    label,
    unit,
    value,
    onChange,
    min,
    max,
    step,
    valueLabelFormat,
}: BaseSliderInputProps) => {
    // Slider의 onChange 이벤트 핸들러
    const handleChange = useCallback(
        (_event: Event, newValue: number | number[]) => {
            if (typeof newValue === 'number') onChange(newValue)
        },
        [onChange]
    )

    return (
        <Box sx={{width: '100%', mb: 2}}>
            <Typography variant='subtitle1' fontWeight='bold' sx={{mb: 5}}>
                {label}
            </Typography>
            <StyledSlider
                value={value}
                onChange={handleChange}
                min={min}
                max={max}
                step={step}
                valueLabelDisplay='on'
                valueLabelFormat={valueLabelFormat}
                aria-label={label}
            />
            <Typography variant='body2' color='text.secondary' sx={{mt: 1}}>
                단위: {unit}
            </Typography>
        </Box>
    )
}

export default BaseSliderInput
