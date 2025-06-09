import {Box, Stack, Typography} from '@mui/material'
import MainSolution from './MainSolution'
import RadarChart from './RadarChart'
import SolutionCard from '../common/SolutionCard'
import {solutionCategories, SolutionType} from '@/constants/solutionCategories'
import useSolutionStore from '@/store/useSolutionStore'

import AiConsultant from './AiConsultant'
interface CategoryProps {
    category: SolutionType
}

const SolutionContents = ({category}: CategoryProps) => {
    const current = useSolutionStore((state) => state.current)
    const solutionsList = current?.solutions[category] ?? []

    const topSolution = solutionsList.find((item) => item.rank === 1)
    const otherSolutions = solutionsList.filter((item) => item.rank !== 1)

    const label =
        solutionCategories.find((c) => c.key === category)?.label || ''

    return (
        <Box>
            <Stack sx={{my: '43px'}}>
                <Stack direction='row' spacing='31px' sx={{height: '476px'}}>
                    {/* 종합 최적 솔루션 */}
                    {topSolution && (
                        <MainSolution solution={topSolution} label={label} />
                    )}
                    {/* 종합 최적 솔루션 비교 */}

                    <Box
                        sx={{
                            bgcolor: '#FFFFFF',
                            width: '476px',
                            borderRadius: '8px',
                            border: '1px solid',
                            borderColor: '#E5E7EB',
                        }}
                    >
                        <Box sx={{padding: '24px'}}>
                            <Typography sx={{fontSize: '18px'}}>
                                {label} 비교
                            </Typography>
                            <RadarChart solution={solutionsList} />
                        </Box>
                    </Box>
                </Stack>
            </Stack>
            <AiConsultant
                question={'🤖 AI 컨설턴트: Top 1 솔루션이 왜 최적일까요?'}
            />

            <Box
                sx={{
                    bgcolor: '#FFFFFF',
                    borderRadius: '8px',
                    border: '1px solid',
                    borderColor: '#E5E7EB',
                    padding: '24px',
                }}
            >
                <Box sx={{pb: '48px'}}>
                    <Typography sx={{fontSize: '18px'}}>추가 솔루션</Typography>
                </Box>
                <Stack
                    direction='row'
                    spacing='19px'
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                    }}
                >
                    {otherSolutions.map((item) => (
                        <SolutionCard solution={item} />
                    ))}
                </Stack>
            </Box>
            <AiConsultant
                question={'🤖 AI 컨설턴트: Top1과 Top2~4와의 전략적 비교 🔍'}
            />
        </Box>
    )
}

export default SolutionContents
