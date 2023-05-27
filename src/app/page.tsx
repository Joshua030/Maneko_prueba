'use client';

import styles from './page.module.css'
import BannerHome from '../../components/bannerHome/bannerHome'
import AboutHome from '../../components/aboutHome/aboutHome'
import SectionCards from '../../components/cardsHome/sectionCards'
import data from "../../data/products.json"
import { useState } from 'react'
import GalleryHome from '../../components/galleryHome/galleryHome';
import photos from "../../data/galleryPhotos.json"


export default function Home() {
 // const products = data;
 const [products, setProducts] = useState(data)
 const [photoData, setPhotoData] = useState(photos)
  
  return (
   <>
   < BannerHome />
   <SectionCards title="Novedades" data={products} />
   <AboutHome />
   <GalleryHome title="Tipos de producto" data={photoData}/>
   <SectionCards title="Te recomendamos" data={products} />
   </>
  )
}
