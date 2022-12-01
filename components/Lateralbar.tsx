import IconClock from "./icons/IconClock";
import IconPhone from "./icons/IconPhone";
import PartHours from "./PartHours";
import ServicesHour from "./ServicesHour";
import SalesHour from "./SalesHour";

export default function Lateralbar() {
  return (
    <>
      <div className="lateralbar mt-6 w-96 p-3 border border-slate-200 bg-light-150">
          <div className="bg-white border border-slate-200">
              <div className="p-3">
                  
                  <h4 className="h4 uppercase text-lg pb-2 mt-4">Dealership Info</h4>
                  
                    
                  <div className="phonenumbers">
                    
                    <div className="bg-light-100 flex w-full">
                      <div className="h-6 w-6 flex items-center justify-center bg-black">
                          <IconPhone className="" />
                      </div>
                      <div className="px-3 text-dark font-bold text-sm" role={'heading'}>Phone Numbers:</div>
                    </div>
                    
                    <div className="px-3 py-1 text-dark-normal">
                      <div className="flex justify-between text-sm pb-1">
                          <div className="">Main:</div>
                          <a className="hover:text-dark" href="callto:6148929012">614-892-9012</a>
                      </div>
                      <div className="flex justify-between text-sm pb-1">
                          <div className="">Sales:</div>
                          <a className="hover:text-dark" href="callto:6148929012">614-892-9012</a>
                      </div>
                      <div className="flex justify-between text-sm pb-1">
                          <div className="">Service:</div>
                          <a className="hover:text-dark" href="callto:6149800456">614-980-0456</a>
                      </div>
                      <div className="flex justify-between text-sm pb-1">
                          <div className="">Parts:</div>
                          <a className="hover:text-dark" href="callto:8669443714">866-944-3714</a>
                      </div>
                    </div>

                  </div>


                  <SalesHour />

                  <ServicesHour />

                  <PartHours />

              </div>
          </div>
      </div>
    </>
  )
}