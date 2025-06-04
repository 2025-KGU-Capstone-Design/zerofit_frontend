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
        backgroundColor: '#FF638420',
        borderColor: '#FF6384',
    },
    {
        backgroundColor: '#36A2EB20',
        borderColor: '#36A2EB',
    },
    {
        backgroundColor: '#FFCE5620',
        borderColor: '#FFCE56',
    },
    {
        backgroundColor: '#4BC0C020',
        borderColor: '#4BC0C0',
    },
]

const normalize = (value: number, min: number, max: number, invert = false) => {
    if (max === min) return 0
    const norm = (value - min) / (max - min)
    return invert ? 1 - norm : norm
}

const RadarChart = ({solution}: SolutionProps) => {
    const investmentCosts = solution.map((item) => item.investmentCost)
    const costSavings = solution.map((item) => item.costSaving)
    const roiPeriods = solution.map((item) => item.roiPeriod)
    const emissionReductions = solution.map((item) => item.emissionReduction)

    const minMax = {
        investmentCost: {
            min: Math.min(...investmentCosts),
            max: Math.max(...investmentCosts),
        },
        costSaving: {
            min: Math.min(...costSavings),
            max: Math.max(...costSavings),
        },
        roiPeriod: {min: Math.min(...roiPeriods), max: Math.max(...roiPeriods)},
        emissionReduction: {
            min: Math.min(...emissionReductions),
            max: Math.max(...emissionReductions),
        },
    }

    const chartData = {
        labels: ['투자비(↓)', '절감액(↑)', 'ROI(↓)', '온실가스 감축량(↑)'],
        datasets: solution.map((item, index) => ({
            label: `Top ${item.rank}`,
            data: [
                normalize(
                    item.investmentCost,
                    minMax.investmentCost.min,
                    minMax.investmentCost.max,
                    true
                ), // 투자비: 낮을수록 좋음
                normalize(
                    item.costSaving,
                    minMax.costSaving.min,
                    minMax.costSaving.max
                ), // 절감액: 높을수록 좋음
                normalize(
                    item.roiPeriod,
                    minMax.roiPeriod.min,
                    minMax.roiPeriod.max,
                    true
                ), // ROI: 낮을수록 좋음
                normalize(
                    item.emissionReduction,
                    minMax.emissionReduction.min,
                    minMax.emissionReduction.max
                ), // 감축량: 높을수록 좋음
            ],
            backgroundColor: color[index % color.length].backgroundColor,
            borderColor: color[index % color.length].borderColor,
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
