import {Typography, Box, Stack} from '@mui/material'

import Ranking from '../common/Ranking'
import Bookmark from '../common/Bookmark'
import {SolutionItem} from '@/types/solution'

interface TopSolutionProps {
    solution: SolutionItem
    label: string
}

const MainSolution = ({solution, label}: TopSolutionProps) => {
    return (
        <Box
            sx={{
                bgcolor: '#FFFFFF',
                width: '907px',
                borderRadius: '8px',
                border: '1px solid',
                borderColor: '#E5E7EB',
            }}
        >
            <Box sx={{padding: '24px'}}>
                <Stack direction='row' justifyContent='space-between'>
                    <Typography sx={{fontSize: '20px'}}>{label}</Typography>
                    <Bookmark
                        bookmarked={solution.bookmark}
                        solId={solution.id}
                    />
                </Stack>
                <Box
                    sx={{
                        bgcolor: '#F9FAFB',
                        borderRadius: '8px',
                        padding: '24px',
                        my: '31px',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <Ranking rank={solution.rank} />
                            <Box sx={{ml: '14.62px'}}>
                                <Typography
                                    sx={{
                                        fontWeight: 700,
                                        fontSize: '20px',
                                        alignItems: 'center',
                                    }}
                                >
                                    개선 구분: {solution.improvementType}
                                </Typography>
                                <Typography
                                    sx={{
                                        color: '#4B5563',
                                        fontSize: '14px',
                                    }}
                                >
                                    {solution.industry}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Stack
                        direction='row'
                        spacing={3}
                        sx={{
                            mt: '25px',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Box
                            sx={{
                                p: '16px',
                                bgcolor: '#FFFFFF',
                                borderRadius: '8px',
                                flex: 1,
                            }}
                        >
                            <Typography sx={{color: '#4B5563', fontSize: 14}}>
                                대상 설비
                            </Typography>
                            <Typography sx={{fontSize: 18}}>
                                {solution.facility}
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                p: '16px',
                                bgcolor: '#FFFFFF',
                                borderRadius: '8px',
                                flex: 1,
                            }}
                        >
                            <Typography sx={{color: '#4B5563', fontSize: 14}}>
                                개선 활동명
                            </Typography>
                            <Typography sx={{fontSize: 18}}>
                                {solution.activity}
                            </Typography>
                        </Box>
                    </Stack>
                    <Stack
                        direction='row'
                        spacing={3}
                        sx={{
                            mt: '25px',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Box
                            sx={{
                                p: '16px',
                                bgcolor: '#FFFFFF',
                                borderRadius: '8px',
                                flex: 1,
                            }}
                        >
                            <Typography sx={{color: '#4B5563', fontSize: 14}}>
                                연간 온실가스 감축량
                            </Typography>
                            <Typography sx={{fontSize: 24, fontWeight: 'bold'}}>
                                {solution.emissionReduction} tCO₂
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                p: '16px',
                                bgcolor: '#FFFFFF',
                                borderRadius: '8px',
                                flex: 1,
                            }}
                        >
                            <Typography sx={{color: '#4B5563', fontSize: 14}}>
                                연간 절감액
                            </Typography>
                            <Typography sx={{fontSize: 24, fontWeight: 'bold'}}>
                                {solution.costSaving} 백만 원
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                p: '16px',
                                bgcolor: '#FFFFFF',
                                borderRadius: '8px',
                                flex: 1,
                            }}
                        >
                            <Typography sx={{color: '#4B5563', fontSize: 14}}>
                                투자 회수 기간
                            </Typography>
                            <Typography sx={{fontSize: 24, fontWeight: 'bold'}}>
                                {solution.roiPeriod} 년
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                p: '16px',
                                bgcolor: '#FFFFFF',
                                borderRadius: '8px',
                                flex: 1,
                            }}
                        >
                            <Typography sx={{color: '#4B5563', fontSize: 14}}>
                                투자 비용
                            </Typography>
                            <Typography sx={{fontSize: 24, fontWeight: 'bold'}}>
                                {solution.investmentCost} 백만 원
                            </Typography>
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </Box>
    )
}

export default MainSolution
