import Head from 'next/head'
import MasterForm from './MasterForm/index'

export default function Home() {

    return (
        <>
            <Head>
                <title>Re-Cycle</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <MasterForm />
        </>
    )
}