
import IconClock from "./icons/IconClock";

export default function SalesHour() {
  return (
    <>
      <div className="Sales Hours">
                    
                    <div className="bg-light-100 flex w-full">
                      <div className="h-6 w-6 flex items-center justify-center bg-black">
                          <IconClock className="" />
                      </div>
                      <div className="px-3 text-dark font-bold text-sm" role={'heading'}>Sales Hours:</div>
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
                          <div className="hover:text-dark">11:00 AM - 5:00 PM</div>
                      </div>
                      <div className="flex justify-between text-sm pb-1">
                          <div className="">Christmas Eve</div>
                          <div className="hover:text-dark">9:00 AM - 1:00 PM</div>
                      </div>
                      <div className="flex justify-between text-sm pb-1">
                          <div className="">Christmas</div>
                          <div className="hover:text-dark">Closed</div>
                      </div>
                      <div className="flex justify-between text-sm pb-1">
                          <div className="">New Years Eve</div>
                          <div className="hover:text-dark">9:00 AM - 5:00 PM</div>
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
                          <div className="">Mon - Thu</div>
                          <div className="hover:text-dark">9:00 AM - 7:00 PM</div>
                      </div>
                      <div className="flex justify-between text-sm pb-1">
                          <div className="">Fri - Sat</div>
                          <div className="hover:text-dark">9:00 AM - 6:00 PM</div>
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