import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="site">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full bg-red-300">
        <div className="border-b-[1px] border-b-slate-100">
          <div className="mx-6">
            <div className="flex justify-end">
              
              <div className="">
                <a href="">
                  ss
                </a>
              </div>
              
              <div className="">
                <a href=""></a>
              </div>
              
              <div className="">
                <a href=""></a>
              </div>

              <div className="">
                <a href=""></a>
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
