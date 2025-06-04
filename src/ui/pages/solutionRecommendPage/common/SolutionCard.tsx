import {Box, Button, Collapse, Divider, Stack, Typography} from '@mui/material'
import {useState} from 'react'
import Ranking from './Ranking'
import Bookmark from './Bookmark'

import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import {SolutionItem} from '@/types/solution'
import ScoreLabel from './ScoreLabel'

interface SolutionProps {
    solution: SolutionItem
}

const SolutionCard = ({solution}: SolutionProps) => {
    const [showDetails, setShowDetails] = useState(false)
    return (
        <Box
            sx={{
                bgcolor: '#FFFFFF',
                width: '430px',
                borderRadius: '8px',
                border: '1px solid',
                borderColor: '#E5E7EB',
                py: '25px',
                px: '35px',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                }}
            >
                <Ranking rank={solution.rank} />
                <Box>
                    <Typography sx={{fontSize: '18px', ml: '14.62px'}}>
                        개선 구분: {solution.improvementType}
                    </Typography>
                </Box>
            </Box>
            {solution.type === 'total_optimization' && (
                <Box
                    sx={{
                        display: 'flex',
                        mt: '12px',
                    }}
                >
                    <ScoreLabel />
                    <Box>
                        <Typography
                            sx={{
                                fontSize: '18px',
                                ml: '14.62px',
                                fontWeight: 700,
                            }}
                        >
                            {solution.score} 점
                        </Typography>
                    </Box>
                </Box>
            )}

            <Stack spacing={'16px'} sx={{my: '36px'}}>
                <Box sx={{display: 'center', justifyContent: 'space-between'}}>
                    <Typography sx={{fontSize: '16px', color: '#4B5563'}}>
                        예상 절감액
                    </Typography>

                    <Stack direction={'row'} sx={{alignItems: 'center'}}>
                        <TrendingUpIcon
                            sx={{
                                width: 20,
                                height: 20,
                                marginRight: '8px',
                                color: '#22C55E',
                            }}
                        />
                        <Typography sx={{fontSize: '16px', fontWeight: 700}}>
                            {solution.costSaving} 백만 원
                        </Typography>
                    </Stack>
                </Box>
                <Box sx={{display: 'center', justifyContent: 'space-between'}}>
                    <Typography sx={{fontSize: '16px', color: '#4B5563'}}>
                        투자 회수 기간
                    </Typography>
                    <Stack direction={'row'} sx={{alignItems: 'center'}}>
                        <AccessTimeFilledIcon
                            sx={{width: 20, height: 20, marginRight: '8px'}}
                        />
                        <Typography sx={{fontSize: '16px', fontWeight: 700}}>
                            {solution.roiPeriod} 년 내 회수
                        </Typography>
                    </Stack>
                </Box>
                <Box sx={{display: 'center', justifyContent: 'space-between'}}>
                    <Typography sx={{fontSize: '16px', color: '#4B5563'}}>
                        연간 온실가스 감축량
                    </Typography>

                    <Stack direction={'row'} sx={{alignItems: 'center'}}>
                        <EnergySavingsLeafIcon
                            sx={{
                                width: 20,
                                height: 20,
                                marginRight: '8px',
                                color: '#22C55E',
                            }}
                        />
                        <Typography sx={{fontSize: '16px', fontWeight: 700}}>
                            {solution.emissionReduction} tCO₂
                        </Typography>
                    </Stack>
                </Box>
                <Box sx={{display: 'center', justifyContent: 'space-between'}}>
                    <Typography sx={{fontSize: '16px', color: '#4B5563'}}>
                        투자 비용
                    </Typography>
                    <Stack direction={'row'} sx={{alignItems: 'center'}}>
                        <MonetizationOnIcon
                            sx={{
                                width: 20,
                                height: 20,
                                marginRight: '8px',
                                color: '#EAB308',
                            }}
                        />
                        <Typography sx={{fontSize: '16px', fontWeight: 700}}>
                            {solution.investmentCost} 백만 원
                        </Typography>
                    </Stack>
                </Box>
            </Stack>

            <Collapse in={showDetails}>
                <Divider sx={{my: 2, borderColor: '#E5E7EB'}} />
                <Box sx={{mb: 3}}>
                    <Typography sx={{fontSize: 14, color: '#4B5563'}}>
                        🏭 산업군
                    </Typography>
                    <Typography sx={{fontSize: 16, fontWeight: 700, mb: 2}}>
                        {solution.industry}
                    </Typography>

                    <Typography sx={{fontSize: 14, color: '#4B5563'}}>
                        🔧 대상 설비
                    </Typography>
                    <Typography sx={{fontSize: 16, fontWeight: 700, mb: 2}}>
                        {solution.facility}
                    </Typography>

                    <Typography sx={{fontSize: 14, color: '#4B5563'}}>
                        📝 개선활동명
                    </Typography>
                    <Typography sx={{fontSize: 16, fontWeight: 700}}>
                        {solution.activity}
                    </Typography>
                </Box>
            </Collapse>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Button
                    variant='contained'
                    sx={{width: 300, height: 44}}
                    onClick={() => setShowDetails((prev) => !prev)}
                >
                    {showDetails ? '간략히 보기' : '상세보기'}
                </Button>
                <Bookmark />
            </Box>
        </Box>
    )
}
export default SolutionCard
