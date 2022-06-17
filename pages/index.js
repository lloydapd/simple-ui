import { useEffect, useState } from 'react'
import Head from 'next/head'
import { Box, Heading, Stack, chakra, Container, HStack, Image, Grid, IconButton } from '@chakra-ui/react'
import { Fade } from 'react-reveal'
import { useVideo } from 'react-use'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/Fa'
import { MostPlayed, LatestUpdates, BestFPS, NowStreaming, MustPlayGame, NintendoDirect, HappeningNow, Footer } from '../sections'

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Simple UI</title>
        <meta name="description" content="Created by Lloyd Gabriel Llurag" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
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
