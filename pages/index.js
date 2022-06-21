import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import { MostPlayed, LatestUpdates, BestFPS, NowStreaming, MustPlayGame, NintendoDirect, HappeningNow, Footer } from '../sections'

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Simple UI</title>
        <meta name="description" content="Created by Lloyd Gabriel Llurag" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
        <link href="https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&display=swap" rel="stylesheet"/>
      </Head>
      <MostPlayed/>
      <LatestUpdates/>
      <BestFPS/>
      <NowStreaming/>
      <MustPlayGame/>
      <NintendoDirect/>
      <HappeningNow />
      <Footer/>
    </Box>
  )
}
