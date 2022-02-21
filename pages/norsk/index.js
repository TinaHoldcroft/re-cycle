import Person from '../../components/Person'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function EnglishHome() {
    const { data, error } = useSWR('/api/people', fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    return (
        <>
    
            <div>
                {data.map((p, i) => (
                    <Person key={i} person={p} />
                ))}
            </div>
        </>
    )
}