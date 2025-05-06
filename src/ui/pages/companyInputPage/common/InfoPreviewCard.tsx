import {useMemo} from 'react'
import {Stack, Card, CardContent, Typography} from '@mui/material'
import useCompanyInputStore from '@/store/useCompanyInputStore'

interface InfoPreviewCardProps {
    step: number
}

const InfoPreviewCard = ({step}: InfoPreviewCardProps) => {
    const industry = useCompanyInputStore((state) => state.industry)
    const ownedFacilities = useCompanyInputStore(
        (state) => state.ownedFacilities
    )
    const investmentBudget = useCompanyInputStore(
        (state) => state.investmentBudget
    )
    const currentEmission = useCompanyInputStore(
        (state) => state.currentEmission
    )

    const facilitiesDisplay = useMemo(
        () =>
            ownedFacilities.length > 0
                ? ownedFacilities.join(', ')
                : '입력된 설비 없음',
        [ownedFacilities]
    )
    return (
        <Stack flex={1} sx={{maxWidth: 260}}>
            <Card sx={{p: 2}}>
                <CardContent>
                    <Typography
                        variant='subtitle1'
                        fontWeight='bold'
                        sx={{mb: 3}}
                    >
                        입력된 정보
                    </Typography>

                    {step >= 1 && (
                        <>
                            <Typography variant='body1' sx={{mb: 2}}>
                                산업군: {industry || '선택 안됨'}
                            </Typography>
                            <Typography variant='body1' sx={{mb: 2}}>
                                보유설비: {facilitiesDisplay}
                            </Typography>
                        </>
                    )}

                    {step >= 2 && (
                        <>
                            <Typography variant='body1' sx={{mb: 2}}>
                                투자가능금액:{' '}
                                {investmentBudget != null
                                    ? investmentBudget
                                        ? `${investmentBudget.toLocaleString()} 백만 원`
                                        : '0원'
                                    : '입력되지 않음'}
                            </Typography>
                            <Typography variant='body1' sx={{mb: 2}}>
                                현재배출량:{' '}
                                {currentEmission
                                    ? `${currentEmission.toLocaleString()} tCO₂`
                                    : '입력되지 않음'}
                            </Typography>
                        </>
                    )}
                </CardContent>
            </Card>
        </Stack>
    )
}

export default InfoPreviewCard
