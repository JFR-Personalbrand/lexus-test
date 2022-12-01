
export default function ServingDubling() {
  return (
    <>
      <div className="servingdubling w-full py-10 mt-3">
                  <div className="">
                    <h2 className='text-center text-2xl font-light pb-4'>SERVING DUBLIN, OH</h2>
                    <p className='text-center text-dark-normal text-xs leading-5'>
                    Lexus and Volvo are releasing two of the hottest vehicles for 2023, 
                    but there are some differences between the models. 
                    The 2023 Lexus RX 350 appears to be more of a luxury-performance crossover 
                    while the 2023 Volvo XC90 is a full-size SUV that caters more to the luxury 
                    side of the equation. If you’re in the market for a versatile vehicle that 
                    delivers expansive cargo space, luxurious appointments, and fun amenities, 
                    then you can go wrong with either model. Now, it’s time to find out which 
                    vehicle will come out on top be reading below.
                    </p>
                  </div>
                  <div className="flex flex-col md:flex-row justify-center items-center md:h-10 mt-4 px-6 md:px-0">
                      <button className='w-full h-11 md:w-44 md:h-8 md:hover:w-48 md:hover:h-9 rounded-[4px] shadow-md bg-primary hover:bg-primary-hover md:hover:text-sm text-xs text-light font-thin mx-2 md:hover:mx-0 my-2 md:hover:my-0 ease-in duration-300'>New RX 350 Inventory</button>
                      <button className='w-full h-11 md:w-44 md:h-8 md:hover:w-48 md:hover:h-9 rounded-[4px] shadow-md bg-secondary hover:bg-secondary-hover md:hover:text-sm text-xs text-light font-thin mx-2 md:hover:mx-0 my-2 md:hover:my-0 ease-in duration-300'>Used RX 350 Inventory</button>
                  </div>
              </div>
    </>
  )
}