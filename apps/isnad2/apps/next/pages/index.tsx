import { HomeScreen } from 'app/features/home/screen'
import Head from 'next/head'
import LeftSideBar from './components/leftSidebar/LeftSideBar';
import HadithView from './components/hadithView/HadithView';

export default function Page() {
  return (
    <>
      <Head>
        <title>Home</title>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </Head>
      <LeftSideBar/>
      <HadithView />
      <HomeScreen />
    </>
  )
}
