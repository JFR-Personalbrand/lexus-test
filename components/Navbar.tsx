import IconCall from "./icons/IconCall";
import IconMenu from "./icons/IconMenu";
import IconPin from "./icons/IconPin";
import IconSearch from "./icons/IconSearch";
import Topbar from "./Topbar";

export default function Navbar() {
  return (
    <>
      <div className="fixed w-full">
        <Topbar />

        <div className="flex justify-between border-b border-b-slate-100 h-[72px] lg:h-20">
            
            <div className="border-l hover:bg-dark bg-light-100 min-w-[64px] w-full max-w-[70px] flex flex-grow ease-in duration-300">
                <a className="menu h-full w-full flex justify-center items-center" href="#">
                    <IconMenu className="m-auto" />
                </a>
            </div>

            


            <div className="flex justify-between w-full items-center lg:px-2">
                <div className="lg:ml-2 flex items-center h-full">
                    <img className="w-full max-w-[164px] h-[43px]" width={"147px"} height={"auto"} src="https://pictures.dealer.com/s/soniccrownlexus/0124/b953a098b876cd6646cc8a92f9396c65x.jpg" alt="Lexus Logo" />
                </div>

                <div className="hidden lg:flex justify-between items-center w-full">
                    <div className="pr-1 pt-2">
                        <img width={"160px"} height={"auto"} src="https://www.germainlexusdublin.com/wp-content/themes/DealerInspireDealerTheme/images/logo-header.png" alt="GERMAIN Lexus of Dublin" />
                    </div>

                    <ul className="flex justify-between">
                        
                        <li className="px-1 xl:px-2">
                            <a className="itemnavbar min-[1073px]:text-[11px] lg:text-[10px] xl:text-sm font-bold uppercase" href="#">New Vehicles<span>▾</span></a>
                        </li>
                        <li className="px-1 xl:px-2">
                            <a className="itemnavbar min-[1073px]:text-[11px] lg:text-[10px] xl:text-sm font-bold uppercase" href="#">Pre-owned vehicles<span>▾</span></a>
                        </li>
                        <li className="px-1 xl:px-2">
                            <a className="itemnavbar min-[1073px]:text-[11px] lg:text-[10px] xl:text-sm font-bold uppercase" href="#">Service<span>▾</span></a>
                        </li>
                        <li className="px-1 xl:px-2">
                            <a className="itemnavbar min-[1073px]:text-[11px] lg:text-[10px] xl:text-sm font-bold uppercase" href="#">Parts<span>▾</span></a>
                        </li>
                        <li className="px-1 xl:px-2">
                            <a className="itemnavbar min-[1073px]:text-[11px] lg:text-[10px] xl:text-sm font-bold uppercase" href="#">Finance<span>▾</span></a>
                        </li>
                        <li className="px-1 xl:px-2">
                            <a className="itemnavbar min-[1073px]:text-[11px] lg:text-[10px] xl:text-sm font-bold uppercase" href="#">Specials<span>▾</span></a>
                        </li>
                        <li className="px-1 xl:px-2">
                            <a className="itemnavbar min-[1073px]:text-[11px] lg:text-[10px] xl:text-sm font-bold uppercase" href="#">About Us<span>▾</span></a>
                        </li>
                        <li className="px-1 xl:px-2">
                            <a className="itemnavbar min-[1073px]:text-[11px] lg:text-[10px] xl:text-sm font-bold uppercase" href="#">Research<span>▾</span></a>
                        </li>
                    </ul>

                </div>

                <div className="lg:hidden h-full flex">
                    <div className="flex items-center">

                        <div className="border-l h-full border-slate-100 min-w-[64px] w-full max-w-[80px]">
                            <a className="flex items-center justify-center w-full h-full hover:opacity-75" href="#">
                                <IconPin />
                            </a>
                        </div>

                        <div className="border-l  h-full border-slate-100 min-w-[64px] w-full max-w-[80px]">
                            <a className="flex justify-center items-center w-full h-full hover:opacity-75" href="#">
                               <IconCall />
                            </a>
                        </div>

                    </div>
                </div>


                
            </div>


            <div className="hidden lg:flex border-l border-slate-100 min-w-[64px] w-full max-w-[70px]">
                <a className="m-auto flex h-full" href="#">
                    <IconSearch className="mx-auto" />
                </a>
            </div>
                    
            
            
            
        </div>

      </div>
    </>
  )
}