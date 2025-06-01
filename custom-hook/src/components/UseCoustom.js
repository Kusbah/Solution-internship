import { useEffect, useState } from 'react'
import axios from 'axios';
const UseCoustom = (url) => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setData(response.data)
            })
            .catch(error => {
                console.error('error with data', error)
            })
    }, [])
    return [data]
}

export default UseCoustom