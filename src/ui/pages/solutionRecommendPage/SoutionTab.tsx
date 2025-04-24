import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'

interface TabPanelProps {
    children?: React.ReactNode
    index: number
    value: number
}

function CustomTabPanel(props: TabPanelProps) {
    const {children, value, index, ...other} = props

    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{p: 3}}>{children}</Box>}
        </div>
    )
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    }
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

    return (
        <Box sx={{width: '100%', mt: '54px'}}>
            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label='basic tabs example'
                >
                    <Tab label='종합 최적 솔루션' {...a11yProps(0)} />
                    <Tab label='감축량 최적 솔루션' {...a11yProps(1)} />
                    <Tab label='절감액 최적 솔루션' {...a11yProps(2)} />
                    <Tab label='ROI 최적 솔루션' {...a11yProps(3)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                종합 최적 솔루션
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
