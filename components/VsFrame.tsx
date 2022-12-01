
export default function VsFrame() {
  return (
    <>
      <div className="vsframe">
                
                <div className="w-full shadow-md">
                  <div className="flex flex-col justify-center items-center min-[1001px]:flex-row">
                    <div className="w-full shadow-md">
                        <img src="https://assets.flowfound.com/cars/2023/2023%20Lexus%20RX50.jpg" alt="Dark Orange 2023 Lexus RX350" />
                    </div>
                    <div className="relative bg-green">
                      <div className="absolute flex items-center justify-center rounded-full -top-5 left-[-18px] bg-white shadow-inner text-sm font-bold p-2 w-9 h-9">
                         <i className='-ml-1 text-slate-500'>VS</i>
                      </div>
                    </div>
                    <div className="w-full lg:w-[99.6%] shadow-md">
                        <img src="https://assets.flowfound.com/cars/2023/2023%20Volvo%20XC90.jpg" alt="Gray 2023 Volvo XC 90" />
                    </div>
                  </div>

                  <div className="pt-4 pb-8 px-3">
                      <div className="grid grid-cols-3 text-sm pb-1 text-center pt-3">
                          <div className="xl:text-2xl lg:text-xl text-sm font-extralight">2023 Lexus RX 350</div>
                          <div className="text-xs pt-1 md:pt-2 lg:pt-3 text-slate-500">vs.</div>
                          <div className="xl:text-2xl lg:text-xl text-sm font-extralight">2023 Volvo XC 90</div>
                          
                      </div>

                      <div className="grid grid-cols-3 text-sm pb-1 text-center pt-1">
                          <div className="xl:text-2xl lg:text-xl text-sm font-extralight">2.4L 4cyl</div>
                          <div className="text-xs pt-1 md:pt-2 lg:pt-3 text-slate-500">Engine</div>
                          <div className="xl:text-2xl lg:text-xl text-sm font-extralight">2.0L 4cyl</div>
                          
                      </div>

                      <div className="grid grid-cols-3 text-sm pb-1 text-center pt-1">
                          <div className="xl:text-2xl lg:text-xl text-sm font-extralight">275 HP</div>
                          <div className="text-xs pt-1 md:pt-2 lg:pt-3 text-slate-500">Horsepower</div>
                          <div className="xl:text-2xl lg:text-xl text-sm font-extralight">247 HP</div>
                          
                      </div>

                      <div className="grid grid-cols-3 text-sm pb-1 text-center pt-1">
                          <div className="xl:text-2xl lg:text-xl text-sm font-extralight">22 city / 29 hwy*</div>
                          <div className="text-xs pt-1 md:pt-2 lg:pt-3 text-slate-500">Fuel Economy</div>
                          <div className="xl:text-2xl lg:text-xl text-sm font-extralight">22 city / 28 hwy*</div>
                          
                      </div>
                  </div>
                </div>

      </div>
    </>
  )
}