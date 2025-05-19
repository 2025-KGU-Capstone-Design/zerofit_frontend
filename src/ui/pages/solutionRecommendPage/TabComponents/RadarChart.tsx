import {SolutionItem} from '@/types/solution'
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

interface SolutionProps {
    solution: SolutionItem[]
}

const color = [
    {
        backgroundColor: '#FF638420', // rgba(255, 99, 132, 0.2)
        borderColor: '#FF6384', // rgba(255, 99, 132, 1)
    },
    {
        backgroundColor: '#36A2EB20', // rgba(54, 162, 235, 0.2)
        borderColor: '#36A2EB', // rgba(54, 162, 235, 1)
    },
    {
        backgroundColor: '#FFCE5620', // rgba(255, 206, 86, 0.2)
        borderColor: '#FFCE56', // rgba(255, 206, 86, 1)
    },
    {
        backgroundColor: '#4BC0C020', // rgba(75, 192, 192, 0.2)
        borderColor: '#4BC0C0', // rgba(75, 192, 192, 1)
    },
]

const RadarChart = ({solution}: SolutionProps) => {
    const chartData = {
        labels: ['투자비', '절감액', 'ROI', '온실가스 감축량'],
        datasets: solution.map((item, index) => ({
            label: `Top ${item.rank}`,
            data: [
                item.investmentCost,
                item.costSaving,
                item.roiPeriod,
                item.emissionReduction,
            ],
            backgroundColor: color[index].backgroundColor,
            borderColor: color[index].borderColor,
            borderWidth: 1,
        })),
    }

    return (
        <Box>
            <Radar data={chartData} />
        </Box>
    )
}

export default RadarChart
