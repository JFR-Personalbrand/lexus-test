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

          <div className="bg-white border mt-3 border-slate-200">
              <div className="p-3">
                  
                <iframe className="border-0" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6104.007081224337!2d-83.094664!3d40.097634!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x18b3c376a6bbc7c5!2sGermain%20Lexus%20of%20Dublin!5e0!3m2!1sen!2sus!4v1669912639245!5m2!1sen!2sus" 
                    width="100%" height="152" allowFullScreen loading="lazy"></iframe>
              </div>
          </div>
      </div>
    </>
  )
}