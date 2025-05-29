import {Box, Typography} from '@mui/material'

type RankingProps = {
    rank: number
}
const Ranking = ({rank}: RankingProps) => {
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
                <Typography fontSize='15px' sx={{color: '#FFFFFF'}}>
                    Top {rank}
                </Typography>
            </Box>
        </Box>
    )
}

export default Ranking
