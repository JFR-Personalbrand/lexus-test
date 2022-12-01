
import IconClock from "./icons/IconClock";

export default function ServicesHour() {
  return (
    <>
      <div className="Service Hours">
                    
                    <div className="bg-light-100 flex w-full">
                      <div className="h-6 w-6 flex items-center justify-center bg-black">
                          <IconClock className="" />
                      </div>
                      <div className="px-3 text-dark font-bold text-sm" role={'heading'}>Service Hours:</div>
                    </div>

                    <div className="bg-light-100 pb-1 flex w-full mt-1">
                      <div className="px-3 leading-5 text-dark font-bold text-sm" role={'heading'}>Special Hours</div>
                    </div>
                    
                    <div className="px-3 py-1 text-dark-normal">
                      <div className="flex justify-between text-sm pb-1">
                          <div className="">Thanksgiving</div>
                          <div className="hover:text-dark">Closed</div>
                      </div>
                      <div className="flex justify-between text-sm pb-1">
                          <div className="">11/27/2022</div>
                          <div className="hover:text-dark">Closed</div>
                      </div>
                      <div className="flex justify-between text-sm pb-1">
                          <div className="">Christmas Eve</div>
                          <div className="hover:text-dark">8:00 AM - 1:00 PM</div>
                      </div>
                      <div className="flex justify-between text-sm pb-1">
                          <div className="">Christmas</div>
                          <div className="hover:text-dark">Closed</div>
                      </div>
                      
                      <div className="flex justify-between text-sm pb-1">
                          <div className="">New Years</div>
                          <div className="hover:text-dark">Closed</div>
                      </div>

                      

                    </div>


                    <div className="bg-light-100 pb-1 flex w-full mt-1">
                      <div className="px-3 leading-5 text-dark font-bold text-sm" role={'heading'}>Regular Hours</div>
                    </div>
                    
                    <div className="px-3 py-1 text-dark-normal">
                      <div className="flex justify-between text-sm pb-1">
                          <div className="">Mon - Fri</div>
                          <div className="hover:text-dark">7:00 AM - 6:00 PM</div>
                      </div>
                      <div className="flex justify-between text-sm pb-1">
                          <div className="">Sat</div>
                          <div className="hover:text-dark">8:00 AM - 4:00 PM</div>
                      </div>
                      <div className="flex justify-between text-sm pb-1">
                          <div className="">Sun</div>
                          <div className="hover:text-dark">Closed</div>
                      </div>
                      
                    </div>

                  </div>
    </>
  )
}