import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Box,
    Typography,
} from '@mui/material'
import ReactMarkdown from 'react-markdown'
import earth from '@/assets/icons/earth.svg'
import aiSolution from '../api/aiSolution.json'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

interface AiConsultantProps {
    question: string
}
const AiConsultant = ({question}: AiConsultantProps) => {
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
                                <ReactMarkdown>{aiSolution.top1}</ReactMarkdown>
                            </Box>
                        </Box>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </div>
    )
}

export default AiConsultant
