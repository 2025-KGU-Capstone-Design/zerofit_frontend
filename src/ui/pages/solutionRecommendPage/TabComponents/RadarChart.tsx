import {Box} from '@mui/material'
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js'
import {Radar} from 'react-chartjs-2'

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
)

export const data = {
    labels: ['투자비', '절감액', 'ROI', '온실가스 감축량'],
    datasets: [
        {
            label: 'Top 1',
            data: [28, 3.84, 7.3, 4.44],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
        },
    ],
}

const RadarChart = () => {
    return (
        <Box>
            <Radar data={data} />
        </Box>
    )
}

export default RadarChart
