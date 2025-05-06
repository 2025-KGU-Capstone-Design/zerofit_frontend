import {useCallback} from 'react'
import {Typography, FormControl, InputLabel, MenuItem} from '@mui/material'
import Select, {SelectChangeEvent} from '@mui/material/Select'
import useCompanyInputStore from '@/store/useCompanyInputStore'
import {industries} from '@/constants/industries'

const IndustryInput = () => {
    const industry = useCompanyInputStore((state) => state.industry)
    const setIndustry = useCompanyInputStore((state) => state.setIndustry)

    const handleChange = useCallback(
        (event: SelectChangeEvent<string>) => {
            setIndustry(event.target.value)
        },
        [setIndustry]
    )

    return (
        <>
            <Typography variant='subtitle1' fontWeight='bold'>
                산업군 선택
            </Typography>
            <FormControl fullWidth>
                <InputLabel id='industry-label'>산업군</InputLabel>
                <Select
                    labelId='industry-label'
                    label='산업군'
                    value={industry}
                    onChange={handleChange}
                >
                    <MenuItem value=''>
                        <em>산업군을 선택하세요</em>
                    </MenuItem>
                    {industries.map((item) => (
                        <MenuItem key={item} value={item}>
                            {item}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </>
    )
}

export default IndustryInput
