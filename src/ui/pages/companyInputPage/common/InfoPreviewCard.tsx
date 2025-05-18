import {useMemo} from 'react'
import {
    Stack,
    Card,
    CardContent,
    Typography,
    List,
    ListItem,
} from '@mui/material'
import useCompanyInputStore from '@/store/useCompanyInputStore'

interface InfoPreviewCardProps {
    step: number
}

const InfoPreviewCard = ({step}: InfoPreviewCardProps) => {
    const industry = useCompanyInputStore((state) => state.industry)
    const targetFacilities = useCompanyInputStore(
        (state) => state.targetFacilities
    )
    const investmentBudget = useCompanyInputStore(
        (state) => state.investmentBudget
    )
    const currentEmission = useCompanyInputStore(
        (state) => state.currentEmission
    )
    const targetEmission = useCompanyInputStore((state) => state.targetEmission)
    const targetRoiPeriod = useCompanyInputStore(
        (state) => state.targetRoiPeriod
    )

    const facilitiesDisplay = useMemo(
        () =>
            targetFacilities.length > 0
                ? targetFacilities.join(', ')
                : '입력된 설비 없음',
        [targetFacilities]
    )

    return (
        <Stack flex={1} sx={{maxWidth: 260, mb: 6}}>
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
                            <Typography variant='body2' fontWeight='bold'>
                                산업군
                            </Typography>
                            <List dense disablePadding sx={{mb: 2, pl: 1}}>
                                <ListItem disableGutters>
                                    <Typography variant='body1'>
                                        • {industry || '선택 안됨'}
                                    </Typography>
                                </ListItem>
                            </List>

                            <Typography variant='body2' fontWeight='bold'>
                                대상설비
                            </Typography>
                            <List dense disablePadding sx={{mb: 2, pl: 1}}>
                                <ListItem disableGutters>
                                    <Typography variant='body1'>
                                        • {facilitiesDisplay}
                                    </Typography>
                                </ListItem>
                            </List>
                        </>
                    )}

                    {step >= 2 && (
                        <>
                            <Typography variant='body2' fontWeight='bold'>
                                투자가능금액
                            </Typography>
                            <List dense disablePadding sx={{mb: 2, pl: 1}}>
                                <ListItem disableGutters>
                                    <Typography variant='body1'>
                                        •{' '}
                                        {investmentBudget != null
                                            ? investmentBudget
                                                ? `${investmentBudget.toLocaleString()} 백만 원`
                                                : '0원'
                                            : '입력되지 않음'}
                                    </Typography>
                                </ListItem>
                            </List>

                            <Typography variant='body2' fontWeight='bold'>
                                현재배출량
                            </Typography>
                            <List dense disablePadding sx={{mb: 2, pl: 1}}>
                                <ListItem disableGutters>
                                    <Typography variant='body1'>
                                        •{' '}
                                        {currentEmission
                                            ? `${currentEmission.toLocaleString()} tCO₂`
                                            : '입력되지 않음'}
                                    </Typography>
                                </ListItem>
                            </List>
                        </>
                    )}

                    {step >= 3 && (
                        <>
                            <Typography variant='body2' fontWeight='bold'>
                                목표배출량
                            </Typography>
                            <List dense disablePadding sx={{mb: 2, pl: 1}}>
                                <ListItem disableGutters>
                                    <Typography variant='body1'>
                                        •{' '}
                                        {targetEmission
                                            ? `${targetEmission.toLocaleString()} tCO₂`
                                            : '입력되지 않음'}
                                    </Typography>
                                </ListItem>
                            </List>

                            <Typography variant='body2' fontWeight='bold'>
                                목표ROI기간
                            </Typography>
                            <List dense disablePadding sx={{pl: 1}}>
                                <ListItem disableGutters>
                                    <Typography variant='body1'>
                                        •{' '}
                                        {targetRoiPeriod != null
                                            ? targetRoiPeriod
                                                ? `${targetRoiPeriod} 년`
                                                : '0년'
                                            : '입력되지 않음'}
                                    </Typography>
                                </ListItem>
                            </List>
                        </>
                    )}
                </CardContent>
            </Card>
        </Stack>
    )
}

export default InfoPreviewCard
