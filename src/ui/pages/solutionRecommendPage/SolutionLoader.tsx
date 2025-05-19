import useSolutionStore from '@/store/useSolutionStore'
import {useEffect} from 'react'

const SolutionLoader = () => {
    const setAllSolutions = useSolutionStore((state) => state.setAllSolutions)

    useEffect(() => {
        const fetchMockData = async () => {
            try {
                const res = await fetch('/data/mockupData.json')
                const data = await res.json()
                setAllSolutions(data)
            } catch (err) {
                console.error('Mock data load failed:', err)
            }
        }
        fetchMockData()
    }, [setAllSolutions])
    return null
}

export default SolutionLoader
