import {Stack, Box, Typography} from '@mui/material'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled'
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import {SolutionItem} from '@/types/solution'

interface BookmarkListComponentProps {
    solution: SolutionItem
}

const BookmarkListComponent = ({solution}: BookmarkListComponentProps) => {
    return (
        <div>
            <Box
                key={solution.id}
                sx={{
                    border: '1px solid #E5E7EB',
                    borderRadius: 2,
                    p: 3,
                    bgcolor: '#FAFAFA',
                }}
            >
                <Typography sx={{fontWeight: 700, fontSize: 20}}>
                    {solution.activity}
                </Typography>
                <Typography sx={{color: '#6B7280', fontSize: 16}}>
                    {solution.industry} | {solution.facility}
                </Typography>
                <Typography sx={{mt: 1, fontSize: 16}}>
                    개선 구분: {solution.improvementType}
                </Typography>
                <Stack direction='row' spacing={4} sx={{mt: 2}}>
                    <Stack direction='row' alignItems='center' spacing={1}>
                        <EnergySavingsLeafIcon sx={{color: '#16A34A'}} />
                        <Typography sx={{fontSize: 16}}>
                            연간 온실가스 감축량:{' '}
                            <b>{solution.emissionReduction} tCO₂</b>
                        </Typography>
                    </Stack>
                    <Stack direction='row' alignItems='center' spacing={1}>
                        <TrendingUpIcon sx={{color: '#22C55E'}} />
                        <Typography sx={{fontSize: 16}}>
                            예상 절감액: <b>{solution.costSaving} 백만 원</b>
                        </Typography>
                    </Stack>
                    <Stack direction='row' alignItems='center' spacing={1}>
                        <MonetizationOnIcon sx={{color: '#EAB308'}} />
                        <Typography sx={{fontSize: 16}}>
                            투자 비용: <b>{solution.investmentCost} 백만 원</b>
                        </Typography>
                    </Stack>
                    <Stack direction='row' alignItems='center' spacing={1}>
                        <AccessTimeFilledIcon sx={{color: '#2563EB'}} />
                        <Typography sx={{fontSize: 16}}>
                            투자 회수 기간: <b>{solution.roiPeriod} 년</b>
                        </Typography>
                    </Stack>
                </Stack>
            </Box>
        </div>
    )
}

export default BookmarkListComponent
