import {useState, useEffect} from 'react'
import {
    Stack,
    Box,
    Typography,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Button,
    CircularProgress,
    Alert,
} from '@mui/material'
import type {CompanyInput} from '@/types/companyInput'
import http from '@/services/Http'

interface SearchHistoryItem extends CompanyInput {
    id: number
    userId: string
}

const tableHeaders: {key: keyof CompanyInput; label: string}[] = [
    {key: 'industry', label: '산업군'},
    {key: 'targetFacilities', label: '대상설비'},
    {key: 'availableInvestment', label: '투자가능금액 (백만 원)'},
    {key: 'currentEmission', label: '현재배출량 (tCO₂eq)'},
    {key: 'targetEmission', label: '목표배출량 (tCO₂eq)'},
    {key: 'targetRoiPeriod', label: '목표ROI기간 (년)'},
]

const SearchHistorySection = () => {
    const [rows, setRows] = useState<SearchHistoryItem[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchHistory = async () => {
            setLoading(true)
            setError(null)
            try {
                const response = await http.get<SearchHistoryItem[]>(
                    '/api/search/history'
                )
                setRows(response.data)
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message)
                } else {
                    setError(String(err))
                }
            } finally {
                setLoading(false)
            }
        }

        fetchHistory()
    }, [])

    return (
        <Stack spacing={4} sx={{mt: 4}}>
            <Typography variant='h6' fontWeight='bold'>
                솔루션 분석 히스토리
            </Typography>

            {loading && <CircularProgress />}

            {error && <Alert severity='error'>{error}</Alert>}

            {!loading && !error && (
                <Table
                    sx={{
                        borderCollapse: 'collapse',
                        '& th, & td': {
                            borderBottom: (theme) =>
                                `3px solid ${theme.palette.divider}`,
                        },
                        '& thead th': {
                            borderBottom: (theme) =>
                                `4px solid ${theme.palette.divider}`,
                        },
                    }}
                >
                    <TableHead>
                        <TableRow>
                            {tableHeaders.map(({key, label}) => (
                                <TableCell
                                    key={key}
                                    sx={{fontWeight: 'bold', fontSize: 14}}
                                >
                                    {label}
                                </TableCell>
                            ))}
                            <TableCell
                                sx={{fontWeight: 'bold', fontSize: 14}}
                                align='center'
                            >
                                솔루션 보기
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.id}>
                                {tableHeaders.map(({key}) =>
                                    key === 'targetFacilities' ? (
                                        <TableCell
                                            key={key}
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
                                                            }}
                                                        >
                                                            {f}
                                                        </Box>
                                                    )
                                                )}
                                            </Stack>
                                        </TableCell>
                                    ) : (
                                        <TableCell
                                            key={key}
                                            sx={{
                                                fontWeight: 'bold',
                                                pl:
                                                    key === 'industry'
                                                        ? 2.3
                                                        : 1,
                                                pr: 3,
                                            }}
                                            align={
                                                key === 'industry'
                                                    ? 'left'
                                                    : 'center'
                                            }
                                        >
                                            {row[key] ?? 0}
                                        </TableCell>
                                    )
                                )}
                                <TableCell>
                                    <Button
                                        variant='contained'
                                        size='small'
                                        sx={{px: 2}}
                                    >
                                        솔루션 보러가기
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )}
        </Stack>
    )
}

export default SearchHistorySection
