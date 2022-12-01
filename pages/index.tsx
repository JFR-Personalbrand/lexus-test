import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Lateralbar from '../components/Lateralbar'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div className="site">
      <Head>
        <title>Compare 2023 Lexus RX 350 vs 2023 Volvo XC90</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@100;200;300;400;500&display=swap" rel="stylesheet"></link>
      </Head>


      <Navbar /> 
      <main className="w-full container mx-auto">
        <div className=" md:px-6 lg:px-8 pt-40 ">
          <div className="flex flex-col md:flex-row justify-between main-content">
            
            <div className="content md:pr-7 md:w-3/4">
              <div className="heading">
                <p aria-current="page" className='capitalize text-sm text-dark-normal font-light text-left'>You Are Here: <a className='hover:text-dark' href="https://www.germainlexusdublin.com/">Home</a>» Compare 2023 Lexus RX 350 vs 2023 Volvo XC90</p>
            
                <h1 className="font-semibold uppercase leading-10 py-5 text-3xl">COMPARE 2023 LEXUS RX 350 VS 2023 VOLVO XC90</h1>
              </div>

              <div className="vsframe shadow-md">
                
                <div className="w-full">
                  <div className="flex flex-col justify-center items-center min-[1001px]:flex-row">
                    <div className="w-full">
                        <img src="https://assets.flowfound.com/cars/2023/2023%20Lexus%20RX50.jpg" alt="Dark Orange 2023 Lexus RX350" />
                    </div>
                    <div className="relative bg-green">
                      <div className="absolute flex items-center justify-center rounded-full -top-5 left-[-18px] bg-white shadow-inner text-sm font-bold p-2 w-9 h-9">
                         <i className='-ml-1'>VS</i>
                      </div>
                    </div>
                    <div className="w-full">
                        <img src="https://assets.flowfound.com/cars/2023/2023%20Volvo%20XC90.jpg" alt="Gray 2023 Volvo XC 90" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
            
            <Lateralbar />

            

          </div>
        </div>
        
      
       
        
        



      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Home
