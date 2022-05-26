import { useEffect, useState } from "react"

const useProduct = () => {

    const [tools, setTools] = useState([])
    useEffect(() => {
        fetch('https://fathomless-brushlands-38249.herokuapp.com/parts')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return [tools, setTools]

}
export default useProduct