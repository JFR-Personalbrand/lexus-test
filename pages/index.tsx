import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Features from '../components/Features'
import IconFacebook from '../components/icons/IconFacebook'
import IconTwitter from '../components/icons/IconTwitter'
import IconYoutube from '../components/icons/IconYoutube'
import Lateralbar from '../components/Lateralbar'
import Navbar from '../components/Navbar'
import ServingDubling from '../components/ServingDubling'
import StickyButtons from '../components/StickyButtons'
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
        
      
        <StickyButtons />
        
        



      </main>

      <footer className="mx-auto px-4 bg-[#111] h-80 text-white tracking-wider w-full ">
         <div className="container mx-auto px-6 pt-8">   
            
          <div className="grid grid-cols-2 lg:grid-cols-4 w-full lg:w-5/6">
            
            <div className="flex flex-col w-full">
               <ul>
                  <li className='font-semibold text-[13px] my-4 uppercase'>
                    <a href="#">About Us</a>
                  </li>
                  
                  <li className='font-semibold text-[13px] my-4 uppercase'>
                    <a href="#">Contact Us</a>
                  </li>
                  
                  <li className='font-semibold text-[13px] my-4 uppercase'>
                    <a href="#">Meet Our Staff</a>
                  </li>                
                  
               </ul>

               <div className="flex mt-3 w-full">
                    <div className="w-12 h-12 bg-secondary rounded-full hover:bg-secondary-hover mr-2 cursor-pointer flex items-center justify-center">
                      <IconTwitter />
                    </div>
                    <div className="w-12 h-12 bg-secondary rounded-full hover:bg-secondary-hover mr-2 cursor-pointer flex items-center justify-center">
                      <IconFacebook />
                    </div>
                    <div className="w-12 h-12 bg-secondary rounded-full hover:bg-secondary-hover mr-2 cursor-pointer flex items-center justify-center">
                      <IconYoutube />
                    </div>
               </div>
            </div>

            <div className="flex flex-col w-full">
               <ul>
                  <li className='font-semibold text-[13px] my-4 uppercase'>
                    <a href="#">Inventory</a>
                  </li>
                  
                  <li className='font-semibold text-[13px] my-4 uppercase'>
                    <a href="#">Specials</a>
                  </li>
                                 
                  
               </ul>

            </div>

            <div className="flex flex-col w-full">
               <ul>
                  <li className='font-semibold text-[13px] my-4 uppercase'>
                    <a href="#">PARTS & SERVICE</a>
                  </li>
                  
                  <li className='font-semibold text-[13px] my-4 uppercase'>
                    <a href="#">EXTRAS</a>
                  </li>
 
               </ul>

            </div>

            <div className="flex flex-col w-full">
               <ul>
                  <li className='font-semibold text-[13px] my-4 uppercase'>
                    <a href="#">FINANCING</a>
                  </li>
                  
               </ul>

            </div>

          </div>

          </div>
      </footer>
    </div>
  )
}

export default Home
