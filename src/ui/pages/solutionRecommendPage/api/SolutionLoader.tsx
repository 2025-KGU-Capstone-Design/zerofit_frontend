import useSolutionStore from '@/store/useSolutionStore'
import {useEffect} from 'react'
import {groupSolutionsByType} from '../utils/groupSolutionsByType'

const SolutionLoader = () => {
    const setAllSolutions = useSolutionStore((state) => state.setAllSolutions)

    useEffect(() => {
        const fetchMockData = async () => {
            try {
                const res = await fetch('/data/mockupData.json')
                const data = await res.json()
                const dataByType = groupSolutionsByType(data.solution)
                setAllSolutions(dataByType)
            } catch (err) {
                console.error('Mock data load failed:', err)
            }
        }
        fetchMockData()
    }, [setAllSolutions])
    return null
}

export default SolutionLoader
