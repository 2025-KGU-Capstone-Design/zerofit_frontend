import {
    Box,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
    Snackbar,
    Alert,
} from '@mui/material'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import {useState} from 'react'
import {updateSolutionBookmark} from '@/services/updateSolutionBookmark'
import useSolutionStore from '@/store/useSolutionStore'

interface BookmarkProps {
    bookmarked: boolean
    solId: number
    onToggle?: (newState: boolean) => void
}

const Bookmark = ({
    bookmarked: initialBookmarked,
    solId,
    onToggle,
}: BookmarkProps) => {
    const [bookmarked, setBookmarked] = useState(initialBookmarked)
    const [confirmOpen, setConfirmOpen] = useState(false)
    const [pendingState, setPendingState] = useState<boolean | null>(null)
    const [snackbarOpen, setSnackbarOpen] = useState(false)
    const [snackbarMsg, setSnackbarMsg] = useState('')
    const [loading, setLoading] = useState(false)

    const updateBookmark = useSolutionStore((state) => state.updateBookmark)

    // 1. 버튼 클릭 시 확인 다이얼로그 오픈
    const handleBookmarkClick = () => {
        setPendingState(!bookmarked)
        setConfirmOpen(true)
    }

    // 2. 확인 다이얼로그에서 "예" 클릭 시 PUT 요청
    const handleConfirm = async () => {
        if (pendingState === null) return
        setLoading(true)
        try {
            await updateSolutionBookmark(solId, pendingState)
            setBookmarked(pendingState)
            updateBookmark(solId, pendingState)
            onToggle && onToggle(pendingState)
            setSnackbarMsg(
                pendingState ? '북마크 되었습니다.' : '북마크가 해제되었습니다.'
            )
            setSnackbarOpen(true)
        } catch (e) {
            setSnackbarMsg('요청에 실패했습니다.')
            setSnackbarOpen(true)
        } finally {
            setLoading(false)
            setConfirmOpen(false)
            setPendingState(null)
        }
    }

    // 3. 다이얼로그 취소
    const handleCancel = () => {
        setConfirmOpen(false)
        setPendingState(null)
    }

    // 4. 스낵바 닫기
    const handleSnackbarClose = () => {
        setSnackbarOpen(false)
    }

    return (
        <>
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
                    cursor: loading ? 'not-allowed' : 'pointer',
                    opacity: loading ? 0.5 : 1,
                }}
                onClick={handleBookmarkClick}
            >
                {bookmarked ? <BookmarkIcon /> : <BookmarkBorderOutlinedIcon />}
            </Box>

            {/* 확인 다이얼로그 */}
            <Dialog
                open={confirmOpen}
                onClose={handleCancel}
                aria-labelledby='bookmark-confirm-dialog'
            >
                <DialogTitle id='bookmark-confirm-dialog'>
                    북마크 확인
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {pendingState
                            ? '이 솔루션을 북마크 하시겠습니까?'
                            : '이 솔루션의 북마크를 해제하시겠습니까?'}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleConfirm}
                        color='primary'
                        disabled={loading}
                    >
                        예
                    </Button>
                    <Button
                        onClick={handleCancel}
                        color='primary'
                        autoFocus
                        disabled={loading}
                    >
                        아니오
                    </Button>
                </DialogActions>
            </Dialog>

            {/* 알림 스낵바 */}
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={2000}
                onClose={handleSnackbarClose}
                anchorOrigin={{vertical: 'top', horizontal: 'center'}}
            >
                <Alert
                    onClose={handleSnackbarClose}
                    severity='success'
                    sx={{width: '100%'}}
                >
                    {snackbarMsg}
                </Alert>
            </Snackbar>
        </>
    )
}

export default Bookmark
