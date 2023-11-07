import { HomeScreen } from 'app/features/home/screen'
import Head from 'next/head'

export default function Page() {
  return (
    <>
      <Head>
        <title>Home</title>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </Head>
      <HomeScreen />
    </>
  )
}
