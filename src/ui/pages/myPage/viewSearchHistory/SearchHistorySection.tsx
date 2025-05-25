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
} from '@mui/material'
import type {CompanyInput} from '@/types/companyInput'

const tableHeaders: {key: keyof CompanyInput; label: string}[] = [
    {key: 'industry', label: '산업군'},
    {key: 'targetFacilities', label: '대상설비'},
    {key: 'investmentBudget', label: '투자가능금액 (백만 원)'},
    {key: 'currentEmission', label: '현재배출량 (tCO₂eq)'},
    {key: 'targetEmission', label: '목표배출량 (tCO₂eq)'},
    {key: 'targetRoiPeriod', label: '목표ROI기간 (년)'},
]

const mockRows: CompanyInput[] = [
    {
        industry: '제조업',
        targetFacilities: ['보일러', '압축기', '안녕하세요'],
        investmentBudget: 85,
        currentEmission: 15000,
        targetEmission: 10000,
        targetRoiPeriod: 3,
    },
    {
        industry: '화학/석유화학',
        targetFacilities: ['펌프', '환풍기', '일반 생산 전력 설비'],
        investmentBudget: 50,
        currentEmission: 8000,
        targetEmission: 4000,
        targetRoiPeriod: 2,
    },
]

const SearchHistorySection = () => (
    <Stack spacing={4} sx={{mt: 4}}>
        <Typography variant='h6' fontWeight='bold'>
            솔루션 분석 히스토리
        </Typography>

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
                    <TableCell sx={{fontWeight: 'bold', fontSize: 14}}>
                        솔루션 보기
                    </TableCell>
                </TableRow>
            </TableHead>

            <TableBody>
                {mockRows.map((row, idx) => (
                    <TableRow key={idx}>
                        {tableHeaders.map(({key}) => {
                            if (key === 'targetFacilities') {
                                return (
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
                                                            bgcolor: '#e0f7fa',
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
                                )
                            }

                            return (
                                <TableCell
                                    key={key}
                                    sx={{
                                        fontWeight: 'bold',
                                        pl: key === 'industry' ? 2.3 : 1,
                                        pr: 3,
                                    }}
                                    align={
                                        key === 'industry' ? 'left' : 'center'
                                    }
                                >
                                    {row[key] ?? 0}
                                </TableCell>
                            )
                        })}

                        <TableCell>
                            <Button
                                variant='contained'
                                size='small'
                                sx={{pl: 2, pr: 2}}
                            >
                                솔루션 보러가기
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </Stack>
)

export default SearchHistorySection
