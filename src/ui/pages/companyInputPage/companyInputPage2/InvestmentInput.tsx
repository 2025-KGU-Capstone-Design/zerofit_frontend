import {Typography, Slider} from '@mui/material'

const InvestmentInput = () => {
    return (
        <>
            <Typography variant='subtitle1' fontWeight='bold'>
                투자가능 금액
            </Typography>

            <Slider
                defaultValue={50}
                min={0}
                max={100}
                valueLabelDisplay='on'
                aria-label='투자가능 금액'
                sx={{
                    '& .MuiSlider-rail': {bgcolor: 'grey.400'},
                    '& .MuiSlider-valueLabel': {
                        padding: '3px 6px',
                        fontSize: '12px',
                    },
                }}
            />
            <Typography variant='body2' color='text.secondary'>
                단위: 백만 원
            </Typography>
        </>
    )
}

export default InvestmentInput
