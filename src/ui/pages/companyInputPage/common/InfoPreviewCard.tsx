import {Stack, Card, CardContent, Typography} from '@mui/material'

const InfoPreviewCard = () => {
    return (
        <Stack flex={1} sx={{maxWidth: '260px'}}>
            <Card sx={{p: 2}}>
                <CardContent>
                    <Typography
                        variant='subtitle1'
                        fontWeight='bold'
                        sx={{mb: 3}}
                    >
                        입력된 정보
                    </Typography>
                    <Typography variant='body1' sx={{mb: 2}}>
                        산업군: 없음
                    </Typography>
                    <Typography variant='body1' sx={{mb: 2}}>
                        보유설비: 없음
                    </Typography>
                </CardContent>
            </Card>
        </Stack>
    )
}

export default InfoPreviewCard
