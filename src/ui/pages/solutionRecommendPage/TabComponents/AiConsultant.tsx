import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Box,
    Typography,
} from '@mui/material'
import ReactMarkdown from 'react-markdown'
import earth from '@/assets/icons/earth.svg'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

interface AiConsultantProps {
    question: string
    top1?: string
    comparison?: string
    loading?: boolean
    error?: string | null
}
const AiConsultant = ({
    question,
    top1,
    comparison,
    loading,
    error,
}: AiConsultantProps) => {
    return (
        <div>
            <Box sx={{my: '43px'}}>
                {/* 🤖 AI 해설 아코디언 */}
                <Accordion
                    // defaultExpanded
                    sx={{
                        bgcolor: '#F3F4F6',
                        borderRadius: 2,
                        boxShadow: 1,
                        border: '1px solid #E5E7EB',
                    }}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography
                            fontSize={20}
                            fontWeight={500}
                            color='text.primary'
                        >
                            {question}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box display='flex' gap={2}>
                            <Box
                                component='img'
                                src={earth}
                                alt='마스코트'
                                sx={{
                                    width: 80,
                                    height: 80,
                                    objectFit: 'contain',
                                    flexShrink: 0,
                                }}
                            />
                            <Box
                                sx={{
                                    backgroundColor: '#fff',
                                    p: 2,
                                    borderRadius: '8px',
                                    border: '1px solid #D1D5DB',
                                    position: 'relative',
                                    flex: 1,
                                }}
                            >
                                {/* 말풍선 꼬리 */}
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: 24,
                                        left: -16,
                                        width: 0,
                                        height: 0,
                                        borderTop: '8px solid transparent',
                                        borderBottom: '8px solid transparent',
                                        borderRight: '8px solid white',
                                    }}
                                />
                                {loading && (
                                    <Typography
                                        color='text.secondary'
                                        fontSize={'18px'}
                                    >
                                        AI가 분석 중입니다...
                                    </Typography>
                                )}
                                {error && (
                                    <Typography color='error'>
                                        {error}
                                    </Typography>
                                )}
                                {/* top1 해설 */}
                                {top1 && <ReactMarkdown>{top1}</ReactMarkdown>}
                                {/* comparison 해설 */}
                                {comparison && (
                                    <Box mt={2}>
                                        <ReactMarkdown>
                                            {comparison}
                                        </ReactMarkdown>
                                    </Box>
                                )}
                                {/* 아무 데이터도 없을 때 */}
                                {!loading && !error && !top1 && !comparison && (
                                    <Typography color='text.secondary'>
                                        AI 해설이 없습니다.
                                    </Typography>
                                )}
                            </Box>
                        </Box>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </div>
    )
}

export default AiConsultant
