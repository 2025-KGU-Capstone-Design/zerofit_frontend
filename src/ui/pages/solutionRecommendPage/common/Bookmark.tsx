import {Box} from '@mui/material'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import {useState} from 'react'

const Bookmark = () => {
    const [bookmarked, setBookmarked] = useState(false)

    const handleBookmark = () => {
        setBookmarked((prev) => !prev)
    }
    return (
        <Box
            sx={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
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
                <BookmarkBorderOutlinedIcon onClick={handleBookmark} />
            )}
        </Box>
    )
}

export default Bookmark
