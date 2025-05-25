import {
    Stack,
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
    {key: 'investmentBudget', label: '투자가능금액 (백 만원)'},
    {key: 'currentEmission', label: '현재배출량 (tCO₂eq)'},
    {key: 'targetEmission', label: '목표배출량 (tCO₂eq)'},
    {key: 'targetRoiPeriod', label: '목표ROI기간 (년)'},
]

const mockRows: CompanyInput[] = [
    {
        industry: '제조업',
        targetFacilities: ['보일러', '압축기'],
        investmentBudget: 85,
        currentEmission: 15000,
        targetEmission: 10000,
        targetRoiPeriod: 3,
    },
]

const SearchHistorySection = () => {
    return (
        <Stack spacing={4} sx={{mt: 4}}>
            <Typography variant='h6' fontWeight='bold'>
                솔루션 분석 히스토리
            </Typography>

            <Table>
                <TableHead>
                    <TableRow>
                        {tableHeaders.map(({key, label}) => (
                            <TableCell
                                key={key}
                                sx={{fontSize: 16, fontWeight: 'bold'}}
                            >
                                {label}
                            </TableCell>
                        ))}

                        <TableCell
                            sx={{fontSize: 16, pl: 4, fontWeight: 'bold'}}
                        >
                            솔루션 보기
                        </TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {mockRows.map((row, idx) => (
                        <TableRow key={idx}>
                            {tableHeaders.map(({key}) => (
                                <TableCell key={key} sx={{fontWeight: 'bold'}}>
                                    {Array.isArray(row[key])
                                        ? (row[key] as string[]).join(', ')
                                        : (row[key] ?? '-')}
                                </TableCell>
                            ))}

                            <TableCell>
                                <Button
                                    variant='contained'
                                    size='small'
                                    onClick={() => {}}
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
}

export default SearchHistorySection
