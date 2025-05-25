import {
    Stack,
    Typography,
    Table,
    TableHead,
    TableRow,
    TableCell,
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
                            <TableCell key={key} sx={{fontWeight: 'bold'}}>
                                {label}
                            </TableCell>
                        ))}

                        {/* ROI 기간 우측에 솔루션 분석 열 추가 */}
                        <TableCell sx={{pl: 4, fontWeight: 'bold'}}>
                            솔루션 분석
                        </TableCell>
                    </TableRow>
                </TableHead>
            </Table>
        </Stack>
    )
}

export default SearchHistorySection
