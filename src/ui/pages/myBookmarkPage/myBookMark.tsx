import {
    Container,
    Typography,
    Box,
    Divider,
    Stack,
    CircularProgress,
    Pagination,
} from '@mui/material'
import {useEffect, useState} from 'react'
import {SolutionItem} from '@/types/solution'
import {fetchBookmarkedSolutions} from '@/services/BookmarkApi'
import BookmarkListComponent from './BookmarkListComponent'

interface MyBookMarkProps {
    requestId: number
}

const ITEMS_PER_PAGE = 4

const MyBookMark = ({requestId}: MyBookMarkProps) => {
    const [solutions, setSolutions] = useState<SolutionItem[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [page, setPage] = useState(1)

    useEffect(() => {
        const loadBookmarks = async () => {
            setLoading(true)
            setError(null)
            try {
                const data = await fetchBookmarkedSolutions(requestId)
                setSolutions(data)
            } catch (e) {
                setError('북마크 데이터를 불러오지 못했습니다.')
            } finally {
                setLoading(false)
            }
        }
        loadBookmarks()
    }, [requestId])

    const startIdx = (page - 1) * ITEMS_PER_PAGE
    const endIdx = startIdx + ITEMS_PER_PAGE
    const pagedSolutions = solutions.slice(startIdx, endIdx)
    const pageCount = Math.ceil(solutions.length / ITEMS_PER_PAGE)

    const handleChangePage = (
        _event: React.ChangeEvent<unknown>,
        value: number
    ) => {
        setPage(value)
    }

    return (
        <div>
            <Container sx={{mt: 14}}>
                <Box>
                    <Typography
                        sx={{
                            fontWeight: 700,
                            fontSize: 24,
                            textAlign: 'center',
                        }}
                    >
                        내 북마크
                    </Typography>
                    <Typography
                        sx={{
                            mt: '17px',
                            color: '#4B5563',
                            fontSize: 18,
                            textAlign: 'center',
                        }}
                    >
                        기업이 관심 있는 탄소 감축 솔루션을 북마크하여 한 곳에서
                        쉽고 빠르게 확인할 수 있습니다.
                        <br />
                        필요한 솔루션을 저장해두고, 언제든지 모아볼 수 있어
                        효율적인 정보 관리와 비교가 가능합니다.
                    </Typography>
                </Box>
                <Divider sx={{my: 4}} />
                {loading ? (
                    <Stack alignItems='center' sx={{mt: 4}}>
                        <CircularProgress />
                    </Stack>
                ) : error ? (
                    <Typography color='error' sx={{textAlign: 'center', mt: 4}}>
                        {error}
                    </Typography>
                ) : solutions.length === 0 ? (
                    <Typography sx={{textAlign: 'center', mt: 4}}>
                        북마크된 솔루션이 없습니다.
                    </Typography>
                ) : (
                    <>
                        <Stack spacing={3} sx={{mt: 2}}>
                            {pagedSolutions.map((solution) => (
                                <BookmarkListComponent solution={solution} />
                            ))}
                        </Stack>
                        <Box display='flex' justifyContent='center' mt={4}>
                            <Pagination
                                count={pageCount}
                                page={page}
                                onChange={handleChangePage}
                                color='primary'
                            />
                        </Box>
                    </>
                )}
            </Container>
        </div>
    )
}

export default MyBookMark
