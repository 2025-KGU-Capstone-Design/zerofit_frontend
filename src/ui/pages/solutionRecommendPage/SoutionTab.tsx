import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import SolutionContents from './TabComponents/SolutionContents'
import {solutionCategories} from '@/constants/solutionCategories'

interface TabPanelProps {
    children?: React.ReactNode
    index: number
    value: number
}

function CustomTabPanel(props: TabPanelProps) {
    const {children, value, index, ...other} = props

    return <div>{value === index && <Box>{children}</Box>}</div>
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

    return (
        <Box sx={{width: '100%', mt: '54px'}}>
            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                <Tabs value={value} onChange={handleChange}>
                    {solutionCategories.map((category) => (
                        <Tab label={category.label} sx={{fontSize: '23px'}} />
                    ))}
                </Tabs>
            </Box>

            {solutionCategories.map((category, index) => (
                <CustomTabPanel value={value} index={index}>
                    <SolutionContents category={category.key} />
                </CustomTabPanel>
            ))}
        </Box>
    )
}
