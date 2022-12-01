import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Features from '../components/Features'
import IconBolt from '../components/icons/IconBolt'
import Lateralbar from '../components/Lateralbar'
import Navbar from '../components/Navbar'
import ServingDubling from '../components/ServingDubling'
import TestDriveCTA from '../components/TestDriveCTA'
import VsFrame from '../components/VsFrame'

const Home: NextPage = () => {
  return (
    <div className="site">
      <Head>
        <title>Compare 2023 Lexus RX 350 vs 2023 Volvo XC90</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@100;200;300;400;500&display=swap" rel="stylesheet"></link>
      </Head>


      <Navbar /> 
      <main className="w-full container mx-auto px-4 lg:px-1">
        <div className=" md:px-6 lg:px-8 pt-40 ">
          <div className="flex flex-col md:flex-row justify-between items-start main-content pb-8">
            
            <div className="content md:pr-7 md:w-3/4">
              <div className="heading">
                <p aria-current="page" className='capitalize text-sm text-dark-normal font-light text-left'>You Are Here: <a className='hover:text-dark' href="https://www.germainlexusdublin.com/">Home</a>» Compare 2023 Lexus RX 350 vs 2023 Volvo XC90</p>
            
                <h1 className="font-semibold uppercase leading-10 py-5 text-3xl">COMPARE 2023 LEXUS RX 350 VS 2023 VOLVO XC90</h1>
              </div>

              <VsFrame />


              <ServingDubling />

              <Features />

              <TestDriveCTA />

              <div className="my-6 text-xs text-dark-normal">
                <small>*All figures are EPA estimates. Actual mileage may vary.</small>
              </div>

              

            </div>
            
            <Lateralbar />

            

          </div>
        </div>
        
      
        <div className="bottombuttons fixed bottom-0 right-0 w-full">
              <div className="flex justify-between items-end">
                  <div className="mx-10">
                    <div className="">
                      <button className="bg-secondary w-14 h-14 hover:-ml-1 hover:h-16 hover:w-16 flex justify-center items-center text-white text-lg shadow-md rounded-full mb-1 md:mb-3 ease-in duration-300">
                        <IconBolt className='m-auto' /> 
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-end flex-col-reverse md:flex-row px-6">
                    <div className="w-[154px]">
                      <button className="bg-dark hover:py-[14px] hover:px-[22px] hover:ml-[-6px] text-white text-lg px-4 py-3 rounded-full mb-1 md:mb-3 ease-in duration-300 shadow-md">VALUE TRADE</button>
                    </div>

                    <div className="w-[87px]">
                      <button className="bg-secondary hover:py-[14px] hover:px-[22px] hover:ml-[-6px] text-white text-lg px-4 py-3 rounded-full mb-1 md:mb-3 ease-in duration-300 shadow-md">CHAT</button>
                    </div>
                    
                    <div className="w-[87px]">
                      <button className="bg-dark hover:py-[14px] hover:px-[22px] hover:ml-[-6px] text-white text-lg px-4 py-3 rounded-full mb-1 md:mb-3 ease-in duration-300 shadow-md">TEXT</button>
                    </div>
                  
                  </div>  
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
