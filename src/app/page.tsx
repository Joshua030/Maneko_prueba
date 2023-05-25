import Image from 'next/image'
import styles from './page.module.css'
import BannerHome from '../../components/bannerHome/bannerHome'
import AboutHome from '../../components/aboutHome/aboutHome'

export default function Home() {
  return (
   <>
   < BannerHome />
   <AboutHome />
   </>
  )
}
