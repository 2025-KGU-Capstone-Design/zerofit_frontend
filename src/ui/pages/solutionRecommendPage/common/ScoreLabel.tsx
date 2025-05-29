import {Box, Typography} from '@mui/material'

const ScoreLabel = () => {
    return (
        <Box>
            <Box
                sx={{
                    bgcolor: '#25BECB',
                    width: '83px',
                    height: '28px',
                    borderRadius: 9999,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Typography fontSize='15px' sx={{color: '#FFFFFF'}}>
                    종합 점수
                </Typography>
            </Box>
        </Box>
    )
}

export default ScoreLabel
