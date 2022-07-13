import Head from 'next/head'
import Header from '../components/Header'
import { createClient } from 'contentful'
import { useEffect, useState } from 'react'
import ProductCard from '../components/product_card'
import styles from '../,,/../styles/Product.module.css'
import { Zoom } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import Link from 'next/link'


export default function Home() {
  const [data, setData] = useState(null)
  useEffect(() => {
    const getitems = async () => {
      const client = createClient({
        // This is the space ID. A space is like a project folder in Contentful terms
        space: `${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
        // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
        accessToken: `${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`
      });

      const response = await client.getEntries()
      setData(response.items)
    }
    getitems()
  }, [])

  const sofa_images = [
    {
      url: "images/sila1.png",
      title: "sofa za ngozi full set",
      price: "520000"
    },
    {
      url: "images/sila2.png",
      title: "image 02",
      price: "400000"
    },
    {
      url: "images/silasofa1.png",
      title: "sofa ya kitambaa cheupe",
      price: "270000"
    },
    {
      url: "images/silasofa2.png",
      title: "sofa ya kitambaa cheupe",
      price: "270000"
    },
    {
      url: "images/silasofa4.png",
      title: "sofa ya kitambaa full set",
      price: "540000"
    },
    {
      url: "images/silasofa5.png",
      title: "sofa ya kitambaa full set",
      price: "540000"
    },
    {
      url: "images/silasofa6.png",
      title: "sofa ya kitambaa full set",
      price: "540000"
    },
    {
      url: "images/silasofa7.png",
      title: "sofa ya kitambaa full set",
      price: "540000"
    },
    {
      url: "images/silasofa18.png",
      title: "image 18",
      price: "540000"
    },
    {
      url: "images/silasofa9.png",
      title: "sofa ya kitambaa full set",
      price: "540000"
    },
    {
      url: "images/silasofa10.png",
      title: "sofa ya kitambaa full set",
      price: "540000"
    },
    {
      url: "images/silasofa16.png",
      title: "sofa ya kitambaa full set",
      price: "540000"
    },
    {
      url: "images/silasofa12.png",
      title: "title",
      price: "540000"
    },
    {
      url: "images/silasofa20.png",
      title: "image 12",
      price: "540000"
    },
    {
      url: "images/silasofa14.png",
      title: "sofa ya kitambaa full set",
      price: "540000"
    },
    {
      url: "images/silasofa17.png",
      title: "sofa ya kitambaa full set",
      price: "540000"
    },
    {
      url: "images/silasofa21.png",
      title: "sofa ya kitambaa full set",
      price: "540000"
    },

  ]

  const stuli_images = [
    {
      url: "images/silastuli.png",
      title: "image 01",
      price: "520000"
    },
    {
      url: "images/silastuli1.png",
      title: "stuli za kisasa",
      price: "400000"
    },
    {
      url: "images/stuli01.jpeg",
      title: "stuli za kisasa",
      price: "400000"
    },
    
  ]

  const bed_images = [
    {
      url: "images/bed1.png",
      title: "modern sofa bed",
      price: "440000"
    },
    {
      url: "images/bed2.png",
      title: "modern sofa bed",
      price: "600000"
    },
    {
      url: "images/bed3.png",
      title: "modern sofa bed",
      price: "600000"
    },
  ]


  return (
    <>
      <Head>
        <title>silla sofa seat</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main className="mb-2">
        < Header />

        <div id='about' className="my-8">
          <h1 h1 className={`${styles.headingUnderline} mt-20 text-4xl text-center mb-4`} >About us</h1>
          <div className={`${styles.frontimage} mt-8 mx-auto`}>
            <img className='w-full h-full' src="/images/frontimage.jpg" alt="front image" />
          </div>
          <p className={`${styles.smallText} ${styles.centercontents}`} ><b>Silla sofa seat</b> ni wataalam wa kutengeneza masofa ya aina mbalimbali. Tunatengeneza masofa ya designs za kila aina. Tutakufikishia mahali popote ulipo. <br /> Ofisi zetu zipo <b>mabadaga</b> na <b>ubaruku</b> mkoa wa mbeya</p>
        </div>

        <div className="my-8">
          <h1 className={`${styles.headingUnderline} text-4xl text-center`} >Designs Zinazo Trend</h1>
          <div className={styles.imageGrid} >
            {
              !data ? <h5 className='text-center' >loading...</h5> : (
                data.map((item, index) => (
                  < ProductCard key={index} sofa={item.fields} />
                ))
              )
            }
          </div>
        </div>

        <div id='services' className={`${styles.centercontents} my-8`} >
          <h2 className={`${styles.headingUnderline} text-center text-2xl my-4 uppercase`} >Huduma Tunazotoa</h2>
          <ul >
            <li className='my-8' >
              <h3 className='text-center font-bold uppercase my-4' >sofa za kisasa pamoja na mito</h3>
              <p className={styles.smallText} >Tunauzoefu mkubwa wa kutengeneza sofa ya kila aina. Kwa mahitaji ya sofa pamoja na mito, wasiliana nasi tunakufikia mahali popote ulipo Tanzania. kwa maongezi zaidi <span className='text-blue-800'><Link href="#contacts" >wasiliana nasi</Link></span>.</p>
              <div className={styles.galleyContainer} >
                <Zoom scale={0.4}>
                  {
                    sofa_images.map((each, index) => (
                      <div className='relative' >
                        <img key={index} className={styles.imageGalley} src={each.url} />
                        <div className="absolute bottom-2 left-0 italic text-sm">
                          <p> {each.title} </p>
                          <p>Bei <b>{Number(each.price).toLocaleString()}/=</b> </p>
                        </div>
                      </div>
                    )
                    )
                  }
                </Zoom>
              </div>
              <button className='bg-pink-200 hover:bg-pink-300 transition duration-200 p-1 my-2'>
                <Link href={`https://wa.me/255765086564?text=I'm%20interested%20in%20your%20sofa%20seat`} >
                  <div className=' flex items-center'>
                    <svg className='w-4 h-4 mr-px fill-green-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>
                    {" "}
                    chat with us
                  </div>
                </Link>
              </button>
            </li>
            <li className='my-8' >
              <h3 className='text-center font-bold uppercase my-4' >stuli za sofa</h3>
              <p className={styles.smallText} >Pia Tunatengeneza stuli za sofa za muundo wa kisasa zaidi. kwa maongezi zaidi <span className='text-blue-800'><Link href="#contacts" >wasiliana nasi</Link></span>.</p>
              <div >
                <Zoom scale={0.4}>
                  {
                    stuli_images.map((each, index) => (
                      <div className='relative' >
                        <img key={index} className={styles.imageGalley} src={each.url} />
                        <div className="absolute bottom-2 left-0 italic text-sm">
                          <p> {each.title} </p>
                          <p>Bei <b>{Number(each.price).toLocaleString()}/=</b> </p>
                        </div>
                      </div>
                    )
                    )
                  }
                </Zoom>
              </div>
              <button className='bg-pink-200 p-1 my-2 hover:bg-pink-300 transition duration-200'>
                <Link href={`https://wa.me/255765086564?text=I'm%20interested%20in%20your%20sofa%20seat`} >
                  <div className=' flex items-center'>
                    <svg className='w-4 h-4 mr-px fill-green-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>
                    {" "}
                    chat with us
                  </div>
                </Link>
              </button>
            </li>

            <li className='my-8' >
              <h3 className='text-center font-bold uppercase my-4' >Tunavalisha sofa kwenye vitanda</h3>
              <p className={styles.smallText} >kwa vitanda vya chuma na mbao, tunavisha vitambaa vya masofa na vifungo kwa gharama naafuu sana. kwa mahitaji na maongezi zaidi <span className='text-blue-800'><Link href="#contacts" >wasiliana nasi</Link></span>.</p>
              <div >
                <Zoom scale={0.4}>
                  {
                    bed_images.map((each, index) => (
                      <div className='relative' >
                        <img key={index} className={styles.imageGalley} src={each.url} />
                        <div className="absolute bottom-2 left-0 italic text-sm">
                          <p> {each.title} </p>
                          <p>Bei <b>{Number(each.price).toLocaleString()}/=</b> </p>
                        </div>
                      </div>
                    )
                    )
                  }
                </Zoom>
              </div>
              <button className='bg-pink-200 p-1 my-2 hover:bg-pink-300 transition duration-200'>
                <Link href={`https://wa.me/255765086564?text=I'm%20interested%20in%20your%20sofa%20seat`} >
                  <div className=' flex items-center'>
                    <svg className='w-4 h-4 mr-px fill-green-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>
                    {" "}
                    chat with us
                  </div>
                </Link>
              </button>
            </li>
          </ul>

          <div id='contacts' className="my-8">
            <h1 className={`${styles.headingUnderline} mt-20 text-4xl text-center mb-4`} >Contact us</h1>
            <p className='mt-4' >kwa mawasiliano zaidi wasiliana nasi kupitia:</p>
            <ul className='border my-1 pl-1' >
              <li>
                <a className=' font-bold mt-2 flex items-center' href="tel:+255765086564">
                  <svg className='w-4 h-4 mr-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z" /></svg>
                  +255765086564
                </a>
              </li>
              <li>
                <a className=' font-bold mt-2 flex items-center' href="sms:+255765086564">
                  sms
                  +255765086564
                </a>
              </li>
              <li>
                <a className=' font-bold mt-2 flex items-center' href={`https://wa.me/255765086564?text=hello%20silla%20sofa%20seat%20how%20are%20you`}>
                  <svg className='w-4 h-4 mr-1 fill-green-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>
                  +255765086564
                </a>
              </li>
            </ul>
            <h2 className='text-center my-4' >OR</h2>
            <div className="my-4">
              <p>Follow us on social medias:</p>
              <div className="border my-1 pl-1" >
                <span className='cursor-pointer' >
                  <Link href="#" >
                    <div className='flex items-center' >
                      <svg className='w-4 h-4 fill-blue-400 mr-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>
                      facebook
                    </div>
                  </Link>
                </span>
                <span className='cursor-pointer' >
                  <Link href="#" >
                    <div className='flex items-center' >
                      <svg className='w-4 h-4 fill-blue-400 mr-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                      instagram
                    </div>
                  </Link>
                </span>
              </div>
            </div>
          </div>

          <div className="my-8 text-sm">
            <h2 className={`${styles.headingUnderline} mb-4 font-bold uppercase text-center`} >MASWALI NA MAJIBU YA WATEJA.</h2>
            <div className={`${styles.smallText} bg-orange-100 py-4 my-4`} >
              <p className='mt-4' >swali: kutengeneza set ya sofa inachukua mda gani?</p>
              <p className='italic' >jibu: Inategemea aina ya sofa, kwa ujumla inachukua siku 2 hadi 3</p>
            </div>
            <div className={`${styles.smallText} bg-orange-100 py-4 my-4`} >
              <p className='mt-4' >swali: kuna punguzo katika bei zilizo tajwa?</p>
              <p className='italic' >jibu: Ndiyo. mazungumzo ya bei yanaweza yakafanyika.</p>
            </div>
            <div className={`${styles.smallText} bg-orange-100 py-4 my-4`} >
              <p className='mt-4' >swali: naweza nika safilishiwa kama nipo mbali ?</p>
              <p className='italic' >jibu: Ndiyo</p>
            </div>
          </div>

          <h2 className={`${styles.headingUnderline} font-bold uppercase text-center`} >Baadhi ya wateja wetu</h2>
          <div className="my-8">
            <div className={styles.client}>
              <div className={styles.imageWrapper}>
                <img className='w-full h-full' src="/images/image2.png" alt="amos ally" />
              </div>
              <p className={styles.clientText} >Hello i am amos, from mbeya green city. silla sofa seat are so good on what they do. I like their work</p>
            </div>
          </div>
          <div className="my-8">
            <div className={styles.client}>
              <div className={styles.imageWrapper}>
                <img className='w-full h-full' src="/images/mark.jpeg" alt="client" />
              </div>
              <p className={styles.clientText} >Mark here, good job silla sofa seat i appreciate a lot!.</p>
            </div>
          </div>
          <div className="my-8">
            <div className={styles.client}>
              <div className={styles.imageWrapper}>
                <img className='w-full h-full' src="/images/girl.jpeg" alt="client" />
              </div>
              <p className={styles.clientText} >Hello i am anita, ninaishi mwanza TZ. ninazikubali sana kazi za silla sofa seat, nimetengenezewa sofa nzuri kwa bei nafuu!</p>
            </div>
          </div>
        </div>
      </main>
      <footer className='text-sm py-8 px-4 bg-gray-900 text-white grid grid-cols-1 md:grid-cols-2' >

        <ul style={{ whiteSpace: "nowrap" }} className='mx-auto my-4' >
          <li>✔️ <Link href="#about" >about us</Link></li>
          <li>✔️ <Link href="#services" >services</Link></li>
          <li>✔️ <Link href="#contacts" >find us</Link></li>
        </ul>

        <div className='mx-auto my-8 md:my-0' >
          <h2 className='text-center mb-2'>Contacts</h2>
          <p>Email:sillasofaseat@gmail.com</p>
          <p>Phone: +255765086564</p>
          <p>Follow us on social medias:</p>
          <div className={styles.borderleft} >
            <span className='cursor-pointer' >
              <Link href="#" >
                <div className='flex' >
                  <svg className='w-4 h-4 fill-white mr-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>
                  facebook
                </div>
              </Link>
            </span>
            <span className='cursor-pointer my-px' >
              <Link href="#" >
                <div className='flex'>
                  <svg className='w-4 h-4 fill-white mr-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                  instagram
                </div>
              </Link>
            </span>
          </div>
          <p className='text-center text-green-300 mt-4' > &copy; amos ally</p>
        </div>

      </footer>
    </>
  )
}

