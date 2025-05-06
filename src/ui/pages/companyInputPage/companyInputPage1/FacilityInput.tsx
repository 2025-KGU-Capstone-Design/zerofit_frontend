import {useCallback} from 'react'
import {Typography, FormGroup, FormControlLabel, Checkbox} from '@mui/material'
import {facilities} from '@/constants/facilities'
import useCompanyInputStore from '@/store/useCompanyInputStore'

const FacilityInput = () => {
    const ownedFacilities = useCompanyInputStore(
        (state) => state.ownedFacilities
    )
    const setOwnedFacilities = useCompanyInputStore(
        (state) => state.setOwnedFacilities
    )

    const handleCheckboxChange = useCallback(
        (facility: string) => {
            setOwnedFacilities(
                ownedFacilities.includes(facility)
                    ? ownedFacilities.filter((f) => f !== facility)
                    : [...ownedFacilities, facility]
            )
        },
        [ownedFacilities, setOwnedFacilities]
    )
    return (
        <>
            <Typography variant='subtitle1' fontWeight='bold'>
                보유설비 입력
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
                                checked={ownedFacilities.includes(facility)}
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
