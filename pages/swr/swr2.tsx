import React from 'react'
import useSWR from 'swr'


// COMPONENT =====================================================================================================================
const swr2 = () => {
    function fetcher() { axios.get("http://localhost:4000/users").then(res => res.data) }
    const { data, error, isLoading } = useSWR('http://localhost:4000/users', fetcher)

    // RETURN
    return (
        <div>swr2</div>
    )
}

export default swr2