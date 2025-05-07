import {Box, Typography} from '@mui/material'

const Ranking = () => {
    return (
        <Box>
            <Box
                sx={{
                    bgcolor: 'secondary.main',
                    width: '58.38px',
                    height: '28px',
                    borderRadius: 9999,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Typography fontSize='16px' sx={{color: '#FFFFFF'}}>
                    Top 1
                </Typography>
            </Box>
        </Box>
    )
}

export default Ranking
