import {Box, Stack, Typography} from '@mui/material'
import MainSolution from './MainSolution'
import RadarChart from './RadarChart'
import SolutionCard from '../common/SolutionCard'
import {solutionCategories, SolutionType} from '@/constants/solutionCategories'
import useSolutionStore from '@/store/useSolutionStore'
import {useCookies} from 'react-cookie'
import AiConsultant from './AiConsultant'
import {useSolutionComment} from '@/hooks/useSolutionComment'
import {useEffect} from 'react'

interface CategoryProps {
    category: SolutionType
}

const SolutionContents = ({category}: CategoryProps) => {
    const current = useSolutionStore((state) => state.current)
    const solutionsList = current?.solutions[category] ?? []
    const requestId = current?.requestId
    const [cookies] = useCookies(['access_token'])

    const commentsCache = useSolutionStore((state) => state.commentsCache)
    const setComment = useSolutionStore((state) => state.setComment)

    const {loading, error, requestComment} = useSolutionComment(
        cookies.access_token,
    )

    const cacheKey = requestId !== undefined ? requestId.toString() : undefined
    const comment =
        cacheKey !== undefined ? commentsCache[cacheKey]?.[category] : undefined

    useEffect(() => {
        if (
            cacheKey &&
            solutionsList.length > 0 &&
            !commentsCache[cacheKey]?.[category]
        ) {
            requestComment(requestId!, solutionsList).then((commentResult) => {
                setComment(requestId!, category, commentResult!)
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cacheKey, category, solutionsList])

    const topSolution = solutionsList.find((item) => item.rank === 1)
    const otherSolutions = solutionsList.filter((item) => item.rank !== 1)

    const label =
        solutionCategories.find((c) => c.key === category)?.label || ''

    return (
        <Box>
            <Stack sx={{my: '1rem'}}>
                <Stack direction="row" spacing="31px" sx={{height: '476px'}}>
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
                            <Typography sx={{fontSize: '20px'}}>
                                {label} 비교
                            </Typography>
                            <RadarChart solution={solutionsList} />
                        </Box>
                    </Box>
                </Stack>
            </Stack>
            <AiConsultant
                question={'🤖 AI 컨설턴트: Top 1 솔루션이 왜 최적일까요?'}
                top1={comment?.top1}
                loading={loading}
                error={error}
            />

            <Box
                sx={{
                    bgcolor: '#FFFFFF',
                    borderRadius: '8px',
                    border: '1px solid',
                    borderColor: '#E5E7EB',
                    padding: '24px',
                    mb: "1rem"
                }}
            >
                <Box sx={{pb: '1rem'}}>
                    <Typography sx={{fontSize: '20px'}}>추가 솔루션</Typography>
                </Box>
                <Stack
                    direction="row"
                    spacing="19px"
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
                comparison={comment?.comparison}
                loading={loading}
                error={error}
            />
        </Box>
    )
}

export default SolutionContents
