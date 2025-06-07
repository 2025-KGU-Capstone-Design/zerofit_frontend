// SearchHistorySection.tsx
import {useState, useEffect} from 'react'
import {
    Stack,
    Box,
    Typography,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Button,
    IconButton,
    Pagination,
    Alert,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import type {CompanyInput} from '@/types/companyInput'
import http from '@/services/Http'
import axios, {AxiosError} from 'axios'

interface SearchHistoryItem extends CompanyInput {
    id: number
}

const tableHeaders: {
    key: keyof Omit<SearchHistoryItem, 'id'>
    label: string
}[] = [
    {key: 'industry', label: '산업군'},
    {key: 'targetFacilities', label: '대상설비'},
    {key: 'availableInvestment', label: '투자가능금액 (백만 원)'},
    {key: 'currentEmission', label: '현재배출량 (tCO₂eq)'},
    {key: 'targetEmission', label: '목표배출량 (tCO₂eq)'},
    {key: 'targetRoiPeriod', label: '목표ROI기간 (년)'},
]

const ROWS_PER_PAGE = 3

const SearchHistorySection = () => {
    const [rows, setRows] = useState<SearchHistoryItem[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)
    const [page, setPage] = useState<number>(1)

    const fetchSearchHistory = async () => {
        try {
            setLoading(true)
            const response = await http.get<SearchHistoryItem[]>(
                '/api/search/history'
            )
            setRows(response.data)
            setError(null)
            const totalPages = Math.ceil(response.data.length / ROWS_PER_PAGE)
            if (page > totalPages && totalPages > 0) {
                setPage(1)
            }
        } catch (err: unknown) {
            if (axios.isAxiosError(err)) {
                const axiosErr = err as AxiosError<{message: string}>
                setError(axiosErr.response?.data?.message ?? axiosErr.message)
            } else if (err instanceof Error) {
                setError(err.message)
            } else {
                setError('알 수 없는 오류가 발생했습니다.')
            }
        } finally {
            setLoading(false)
        }
    }

    const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
        setPage(value)
    }

    useEffect(() => {
        fetchSearchHistory()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const paginatedRows = rows.slice(
        (page - 1) * ROWS_PER_PAGE,
        (page - 1) * ROWS_PER_PAGE + ROWS_PER_PAGE
    )
    const pageCount = Math.ceil(rows.length / ROWS_PER_PAGE)

    return (
        <Stack spacing={4} sx={{mt: 4}}>
            <Typography variant='h6' fontWeight='bold'>
                솔루션 분석 히스토리
            </Typography>

            {loading && (
                <Typography variant='body2' color='text.secondary'>
                    데이터를 불러오는 중…
                </Typography>
            )}

            {error && <Alert severity='error'>에러 발생: {error}</Alert>}

            {!loading && !error && (
                <>
                    <TableContainer
                        sx={{
                            border: '1px solid',
                            borderColor: 'divider',
                            borderRadius: 1,
                        }}
                    >
                        <Table stickyHeader sx={{tableLayout: 'fixed'}}>
                            <TableHead>
                                <TableRow>
                                    <TableCell
                                        sx={{
                                            fontWeight: 'bold',
                                            fontSize: 14,
                                            width: '10%',
                                        }}
                                    >
                                        산업군
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            fontWeight: 'bold',
                                            fontSize: 14,
                                            width: '15%',
                                        }}
                                    >
                                        대상설비
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            fontWeight: 'bold',
                                            fontSize: 14,
                                            width: '12%',
                                        }}
                                        align='center'
                                    >
                                        투자가능금액 (백만 원)
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            fontWeight: 'bold',
                                            fontSize: 14,
                                            width: '14%',
                                        }}
                                        align='center'
                                    >
                                        현재배출량 (tCO₂eq)
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            fontWeight: 'bold',
                                            fontSize: 14,
                                            width: '14%',
                                        }}
                                        align='center'
                                    >
                                        목표배출량 (tCO₂eq)
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            fontWeight: 'bold',
                                            fontSize: 14,
                                            width: '14%',
                                        }}
                                        align='center'
                                    >
                                        목표ROI기간 (년)
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            fontWeight: 'bold',
                                            fontSize: 14,
                                            width: '18%',
                                        }}
                                        align='center'
                                    >
                                        솔루션 보기
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            fontWeight: 'bold',
                                            fontSize: 14,
                                            width: '6%',
                                        }}
                                        align='center'
                                    >
                                        삭제
                                    </TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {paginatedRows.length === 0 ? (
                                    <TableRow>
                                        <TableCell
                                            colSpan={tableHeaders.length + 2}
                                            align='center'
                                        >
                                            검색 내역이 없습니다.
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    paginatedRows.map((row) => (
                                        <TableRow key={row.id}>
                                            <TableCell
                                                sx={{
                                                    fontWeight: 'bold',
                                                    pl: 2,
                                                    pr: 1,
                                                }}
                                            >
                                                {row.industry}
                                            </TableCell>

                                            <TableCell
                                                sx={{fontWeight: 'bold'}}
                                            >
                                                <Stack
                                                    spacing={1}
                                                    alignItems='flex-start'
                                                >
                                                    {row.targetFacilities.map(
                                                        (f, i) => (
                                                            <Box
                                                                key={i}
                                                                sx={{
                                                                    px: 1,
                                                                    py: 0.5,
                                                                    bgcolor:
                                                                        '#e0f7fa',
                                                                    color: '#006064',
                                                                    borderRadius: 3,
                                                                    fontSize: 12,
                                                                }}
                                                            >
                                                                {f}
                                                            </Box>
                                                        )
                                                    )}
                                                </Stack>
                                            </TableCell>

                                            <TableCell
                                                sx={{fontWeight: 'bold', pr: 1}}
                                                align='center'
                                            >
                                                {row.availableInvestment}
                                            </TableCell>

                                            <TableCell
                                                sx={{fontWeight: 'bold', pr: 1}}
                                                align='center'
                                            >
                                                {row.currentEmission}
                                            </TableCell>

                                            <TableCell
                                                sx={{fontWeight: 'bold', pr: 1}}
                                                align='center'
                                            >
                                                {row.targetEmission}
                                            </TableCell>

                                            <TableCell
                                                sx={{fontWeight: 'bold', pr: 1}}
                                                align='center'
                                            >
                                                {row.targetRoiPeriod}
                                            </TableCell>

                                            <TableCell
                                                sx={{width: '12%'}}
                                                align='center'
                                            >
                                                <Button
                                                    variant='contained'
                                                    size='small'
                                                    sx={{pl: 2, pr: 2}}
                                                >
                                                    솔루션 보러가기
                                                </Button>
                                            </TableCell>

                                            <TableCell align='center'>
                                                <IconButton size='small'>
                                                    <DeleteIcon
                                                        fontSize='small'
                                                        color='error'
                                                    />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    {rows.length > ROWS_PER_PAGE && (
                        <Stack alignItems='center' sx={{mt: 2}}>
                            <Pagination
                                count={pageCount}
                                page={page}
                                onChange={handlePageChange}
                                color='primary'
                                showFirstButton
                                showLastButton
                            />
                        </Stack>
                    )}
                </>
            )}
        </Stack>
    )
}

export default SearchHistorySection
