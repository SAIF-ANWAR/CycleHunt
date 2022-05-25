import { useEffect, useState } from "react"

const useProduct = () => {
    const [tools, setTools] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/parts')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return [tools, setTools]
}
export default useProduct