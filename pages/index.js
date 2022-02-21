import Head from 'next/head'
import MasterForm from './MasterForm/index'

export default function Home() {

    return (
        <>
            <Head>
                <title>Re-Cycle</title>
            </Head>

            <header>
                <img
                    style={{ width: '80vw' }}
                    src='./vintage-bicycle.jpg'
                    alt=''
                />
            </header>

            <MasterForm />
        </>
    )
}