import {useCallback} from 'react'
import {Typography, FormGroup, FormControlLabel, Checkbox} from '@mui/material'
import {facilities} from '@/constants/facilities'
import useCompanyInputStore from '@/store/useCompanyInputStore'

const FacilityInput = () => {
    const targetFacilities = useCompanyInputStore(
        (state) => state.targetFacilities
    )
    const setTargetFacilities = useCompanyInputStore(
        (state) => state.setTargetFacilities
    )

    const handleCheckboxChange = useCallback(
        (facility: string) => {
            setTargetFacilities(
                targetFacilities.includes(facility)
                    ? targetFacilities.filter((f) => f !== facility)
                    : [...targetFacilities, facility]
            )
        },
        [targetFacilities, setTargetFacilities]
    )
    return (
        <>
            <Typography variant='subtitle1' fontWeight='bold'>
                대상설비 입력
            </Typography>
            <FormGroup
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                }}
            >
                {facilities.map((facility) => (
                    <FormControlLabel
                        key={facility}
                        control={
                            <Checkbox
                                checked={targetFacilities.includes(facility)}
                                onChange={() => handleCheckboxChange(facility)}
                            />
                        }
                        label={facility}
                    />
                ))}
            </FormGroup>
        </>
    )
}

export default FacilityInput
