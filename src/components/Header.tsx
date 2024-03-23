import Images from '../assets/images/png/logo.png' 
import group from '../assets/images/png/Group 48097254.png'
import ellipse from '../assets/images/png/Ellipse 131.png'
import vector from '../assets/images/png/Vector.png'
import unsplash from '../assets/images/png/unsplash_LWfFfA5U5z8.png'
import frame1 from '../assets/images/png/Frame 12712.png'
import frame2 from '../assets/images/png/Frame 12717.png'

const Header = () => {
    return(
        <header className=" h-[80px] border border-gray-300 shadow-md">
            <div className=" h-10 flex justify-center">
                <div className="w-[100px] h-24 mt-6 ">
                    <a href="#"><img src={Images} alt="" className="w-[70px] h-6"/></a>
                </div>
                <nav className="w-[400px] h-24 justify-center space-x-8 ml-40 mt-6  ">
                        <a href="https://" className=" font-medium rounded-full hover:text-blue-500 hover:bg-blue-100/50 hover:underline hover:underline-offset-[35px] ">Home</a>
                        <a href="https://" className=" font-medium rounded-full hover:text-blue-500 hover:bg-blue-100/50 hover:underline hover:underline-offset-[35px] ">Workspace</a>
                        <a href="https://" className=" font-medium rounded-full hover:text-blue-500 hover:bg-blue-100/50 hover:underline hover:underline-offset-[35px]">Resources Library</a>
                </nav>
                <nav className="flex w-[400px] h-24 justify-center space-x-8 mt-5 ml-10 ">
                        <a href="https://" className=' h-6 mt-3'><img src={vector} alt="" /></a>
                        <a href="https://" className=' h-4 mt-1'><img src={ellipse} alt="" /></a>
                        <a href="https://" className=' flex font-medium mt-2'>Username
                        <img src={vector} className=' h-4 mt-1 ml-2' alt="" />
                        </a>
                </nav>
                <div className=' h-6 mt-7'>
                    <a href="https://"><img src={group} alt="" /></a>
                </div>
            </div>
            <div className=' mt-12'>
                <img src={unsplash} className=' absolute' alt="" />
                <img src={frame1} className=' relative ml-20 mt-[10px]' alt="" />
                <img src={frame2} className=' relative ml-[70px] mt-10 ' alt="" />
            </div>
        </header>
        
    )
}
export default Header;