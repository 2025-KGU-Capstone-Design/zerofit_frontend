import {Typography, Slider} from '@mui/material'

const TargetROIInput = () => {
    return (
        <>
            <Typography variant='subtitle1' fontWeight='bold'>
                목표ROI기간 입력
            </Typography>

            <Slider
                defaultValue={2.5}
                min={0.0}
                max={5.0}
                step={0.1}
                valueLabelDisplay='on'
                aria-label='목표ROI기간'
                sx={{
                    '& .MuiSlider-rail': {bgcolor: 'grey.400'},
                    '& .MuiSlider-valueLabel': {
                        padding: '3px 6px',
                        fontSize: '12px',
                    },
                }}
            />
            <Typography variant='body2' color='text.secondary'>
                단위: 년
            </Typography>
        </>
    )
}

export default TargetROIInput
