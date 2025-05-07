import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import SolutionContents from './TabComponents/SolutionContents'

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
                    <Tab label='종합 최적 솔루션' sx={{fontSize: '17px'}} />
                    <Tab label='감축량 최적 솔루션' sx={{fontSize: '17px'}} />
                    <Tab label='절감액 최적 솔루션' sx={{fontSize: '17px'}} />
                    <Tab label='ROI 최적 솔루션' sx={{fontSize: '17px'}} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <SolutionContents />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                감축량 최적 솔루션
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                절감액 최적 솔루션
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                ROI 최적 솔루션
            </CustomTabPanel>
        </Box>
    )
}
