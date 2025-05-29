import React from 'react'
import Tooltip, {TooltipProps, tooltipClasses} from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import {styled} from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'

const HtmlTooltip = styled(({className, ...props}: TooltipProps) => (
    <Tooltip {...props} classes={{popper: className}} />
))(({theme}) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 300,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
        padding: '12px',
    },
}))

const ScoreInfoTooltip = () => {
    return (
        <HtmlTooltip
            title={
                <React.Fragment>
                    <Typography
                        sx={{fontWeight: 'bold', mb: 1, fontSize: '16px'}}
                    >
                        📌 종합 점수 안내
                    </Typography>
                    <Typography
                        variant='body2'
                        sx={{mb: 0.5, fontSize: '15px'}}
                    >
                        이 점수는 투자비, 절감액, 회수기간, 감축량 등 다양한
                        지표를 중요도별로 가중합산해 종합적인 요소를 평가한
                        점수입니다.
                    </Typography>
                    <Typography
                        variant='body2'
                        sx={{mb: 0.5, fontSize: '15px'}}
                    >
                        다양한 요소를 균형 있게 반영해 솔루션을 객관적으로
                        비교할 수 있습니다.
                    </Typography>
                    <Typography
                        variant='body2'
                        sx={{
                            mt: 1,
                            display: 'block',
                            fontStyle: 'italic',
                            fontSize: '15px',
                        }}
                    >
                        ✅ 이 점수는 ‘종합 최적 솔루션’ 탭 전용으로 제공됩니다.
                    </Typography>
                </React.Fragment>
            }
        >
            <IconButton size='small'>
                <InfoOutlinedIcon fontSize='small' sx={{color: '#6B7280'}} />
            </IconButton>
        </HtmlTooltip>
    )
}

export default ScoreInfoTooltip
