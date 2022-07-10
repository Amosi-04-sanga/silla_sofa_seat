import Head from 'next/head'
import Header from './components/Header'
import { createClient } from 'contentful'
import { useEffect, useState } from 'react'
import ProductCard from './components/product_card'
import styles from '../,,/../styles/Product.module.css'
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css"
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
      original: "images/sofa01.jpeg",
      thumbnail: "images/image2.png",
      originalClass: "galleyImages",

    },
    {
      original: "images/sofa02.png",
      thumbnail: "images/sofa.jpeg",
      originalClass: "galleyImages",
    },
    {
      original: "images/frontimage.png",
      thumbnail: "images/image2.png",
      originalClass: "galleyImages",
    }
  ]

  const stuli_images = [
    {
      original: "images/stuli01.jpeg",
      thumbnail: "images/image2.png",
      originalClass: "galleyImages",

    },
    {
      original: "images/stuli02.jpeg",
      thumbnail: "images/sofa.jpeg",
      originalClass: "galleyImages",
    },
    {
      original: "images/stuli03.jpeg",
      thumbnail: "images/image2.png",
      originalClass: "galleyImages",
    }
  ]


  return (
    <>
      <Head>
        <title>silla sofa seat</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mb-2">
        < Header />
        <h1 className={`${styles.headingUnderline} mt-20 text-4xl text-center mb-4`} >Designs Zinazo Trend</h1>
        <div className={styles.imageGrid} >
          {
            !data ? "loading..." : (
              data.map((item, index) => (
                < ProductCard key={index} sofa={item.fields} />
              ))
            )
          }
        </div>
        <div className={styles.services} >
          <h2 className={`${styles.headingUnderline} text-center text-2xl my-4 uppercase`} >Huduma Tunazotoa</h2>
          <ul >
            <li className='my-8' >
              <h3 className='text-center font-bold uppercase my-4' >sofa seat</h3>
              <p className={styles.smallText} >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, iste. Accusantium maxime officia provident quia illum, ipsam ab praesentium magnam!</p>
              <div className={styles.galleyContainer} >
                < ImageGallery
                  showThumbnails={false}
                  items={sofa_images}
                  showPlayButton={false}
                  autoPlay={true}
                />
              </div>
              <button className='bg-pink-200 p-1 my-2'>
                <Link href={`https://wa.me/255735042895?text=I'm%20interested%20in%20your%20sofa%20seat`} >
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
              <p className={styles.smallText} >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, iste. Accusantium maxime officia provident quia illum, ipsam ab praesentium magnam!</p>
              <div>
                < ImageGallery
                  showThumbnails={false}
                  items={stuli_images}
                  showPlayButton={false}
                  autoPlay={true}
                />
              </div>
              <button className='bg-pink-200 p-1 my-2'>
                <Link href={`https://wa.me/255735042895?text=I'm%20interested%20in%20your%20sofa%20seat`} >
                  <div className=' flex items-center'>
                    <svg className='w-4 h-4 mr-px fill-green-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>
                    {" "}
                    chat with us
                  </div>
                </Link>
              </button>
            </li>
          </ul>

          <h2 className={`${styles.headingUnderline} font-bold uppercase text-center`} >Baadhi ya wateja wetu</h2>
          <div className="my-8">
            <div className={styles.client}>
              <div className={styles.imageWrapper}>
                <img className='w-full h-full' src="/images/image2.png" alt="" />
              </div>
              <p className={styles.clientText} >Hello i am amos, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, ut consequatur? Sunt.</p>
            </div>
          </div>
          <div className="my-8">
            <div className={styles.client}>
              <div className={styles.imageWrapper}>
                <img className='w-full h-full' src="/images/mark.jpeg" alt="" />
              </div>
              <p className={styles.clientText} >Mark here, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, ut consequatur? Sunt.</p>
            </div>
          </div>
          <div className="my-8">
            <div className={styles.client}>
              <div className={styles.imageWrapper}>
                <img className='w-full h-full' src="/images/girl.jpeg" alt="anita" />
              </div>
              <p className={styles.clientText} >Hello i am anita, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, ut consequatur? Sunt.</p>
            </div>
          </div>
        </div>
      </main>
      <footer className='text-sm py-8 px-4 bg-gray-900 text-white grid grid-cols-1 md:grid-cols-2' >
        <ul className='mx-auto my-4' >
          <li>✔️ About us</li>
          <li>✔️ Galley</li>
          <li>✔️ our office</li>

        </ul>
        <div className='mx-auto' >
          <h2 className='text-center' >Contacts</h2>
          <p>email:sillasofaseat@gmail.com</p>
          <p>phone: 0736468564</p>
        </div>
      </footer>
    </>
  )
}

