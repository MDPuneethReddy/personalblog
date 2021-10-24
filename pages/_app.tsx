import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NavBar } from '../components/NavBar'
function MyApp({ Component, pageProps }: AppProps) {
  return(
    <div>
      <NavBar />
      <Component {...pageProps} />
      {/* mdpuneethreddy.com ©2018 Created by M D PUNEETH REDDY */}
  
   </div>
  )
}
export default MyApp
