
import IconBolt from '../components/icons/IconBolt'


export default function StickyButtons() {
  return (
    <>
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
    </>
  )
}