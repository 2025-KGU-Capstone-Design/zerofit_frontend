import {
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from '@mui/material'
import {industries} from '@/constants/industries'

const IndustryInput = () => {
    return (
        <>
            <Typography variant='subtitle1' fontWeight='bold'>
                산업군 선택
            </Typography>
            <FormControl fullWidth>
                <InputLabel id='industry-label'>산업군</InputLabel>
                <Select labelId='industry-label' label='산업군' defaultValue=''>
                    <MenuItem value=''>
                        <em>산업군을 선택하세요</em>
                    </MenuItem>
                    {industries.map((industry) => (
                        <MenuItem key={industry} value={industry}>
                            {industry}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </>
    )
}

export default IndustryInput
