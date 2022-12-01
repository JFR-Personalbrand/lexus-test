
export default function Topbar() {
  return (
    <>
      <div className="border-b-[1px] hidden lg:block border-r-slate-100">
          <div className="mx-6">
            <div className="flex justify-end">
              
              <div className="title-6 font-bold px-4 border-r-[2px] border-r-slate-100">
                SALES&nbsp;
                <a className="hover:text-dark-hover" href="callto:6148929012">
                614-892-9012
                </a>
              </div>
              
              <div className="title-6 font-bold px-4 border-r-[2px] border-r-slate-100">
                SERVICE&nbsp;
                <a className="hover:text-dark-hover" href="callto:6149800456">614-980-0456</a>
              </div>
              
              <div className="title-6 font-bold px-4 border-r-[2px] border-r-slate-100">
                PARTS&nbsp;
                <a className="hover:text-dark-hover" href="callto:8869443714">866-944-3714</a>
              </div>

              <div className="title-6 font-bold px-4 hover:text-dark-hover">
                <a href="https://www.google.com/maps?q=germain+lexus+of+dublin&um=1&ie=UTF-8&sa=X&ved=2ahUKEwi1juTfwLX6AhXDjIkEHf9oDwsQ_AUoAXoECAIQAw">3885 W DUBLIN GRANVILLE RD - DUBLIN, OH 43017</a>
              </div>

            </div>
          </div>
        </div>
        
        <div className="lg:hidden w-full bg-black py-1">
          <p className='uppercase text-white text-center text-sm'>Germain Lexus of Dublin</p>
        </div>
    </>
  )
}