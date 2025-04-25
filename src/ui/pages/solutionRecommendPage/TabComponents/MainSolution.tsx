import {useState} from 'react'
import {Typography, Box, Stack} from '@mui/material'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import Ranking from './Ranking'

const MainSolution = () => {
    const [bookmarked, setBookmarked] = useState(false)

    const handleBookmark = () => {
        setBookmarked((prev) => !prev)
    }

    return (
        <Box
            sx={{
                bgcolor: '#FFFFFF',
                width: '907px',
                borderRadius: '16px',
                border: '1px solid',
                borderColor: '#E5E7EB',
            }}
        >
            <Box sx={{padding: '24px'}}>
                <Stack direction='row' justifyContent='space-between'>
                    <Typography sx={{fontSize: '18px'}}>
                        종합 최적 솔루션
                    </Typography>
                    <Box
                        sx={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '7px',
                            border: '1px solid',
                            borderColor: '#E5E7EB',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        {bookmarked ? (
                            <BookmarkIcon onClick={handleBookmark} />
                        ) : (
                            <BookmarkBorderOutlinedIcon
                                onClick={handleBookmark}
                            />
                        )}
                    </Box>
                </Stack>

                <Box
                    sx={{
                        bgcolor: '#F9FAFB',
                        borderRadius: '16px',
                        my: '31px',
                        padding: '24px',
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <Box>
                        <Typography sx={{fontWeight: 700, fontSize: '20px'}}>
                            개선 구분: (개선 구분)
                        </Typography>
                        <Typography
                            sx={{pt: '8px', color: '#4B5563', fontSize: '14px'}}
                        >
                            (산업군)
                        </Typography>
                    </Box>
                    <Ranking />
                </Box>
            </Box>
        </Box>
    )
}

export default MainSolution
