import Images from '../assets/images/png/logo.png' 
import group from '../assets/images/png/Group 48097254.png'
import ellipse from '../assets/images/png/Ellipse 131.png'
import vector from '../assets/images/png/Vector.png'
import unsplash from '../assets/images/png/unsplash_LWfFfA5U5z8.png'
import frame1 from '../assets/images/png/Frame 12712.png'
import  DropArrow from '../assets/images/svg/Vector.svg'
import ArrowLeft from '../assets/images/png/arrow-left.png'
import React, { useState } from 'react'


const Header: React.FC = () => {
    const [selectedItem, setSelectedItems] = useState<string | null>(null);

    const HandleClick = (item: string) => {
        setSelectedItems(item)
    }
    return(
        <header className=" h-[80px] border border-gray-300 shadow-md">
            <div className=" h-10 flex justify-center">
                <div className="w-[100px] h-24 mt-6 ">
                    <a href="#"><img src={Images} alt="" className="w-[70px] h-6"/></a>
                </div>
                <nav className="w-[400px] h-24 justify-center space-x-8 ml-40 mt-6  ">
                        <a href="#" className={`font-medium ${selectedItem === 'home' ? 'text-blue-600 rounded-full bg-blue-100/50 underline underline-offset-[35px]' : ''}`} onClick={() => HandleClick('home')}>Home</a>
                        <a href="#" className={`font-medium ${selectedItem === 'workspace' ? 'text-blue-600 rounded-full bg-blue-100/50 underline underline-offset-[35px]' : ''}`} onClick={() => HandleClick('workspace')}>Workspace</a>
                        <a href="#" className={`font-medium ${selectedItem === 'resources library' ? 'text-blue-600 rounded-full bg-blue-100/50 underline underline-offset-[35px]' : ''}`} onClick={() => HandleClick('resources library')}>Resources Library</a>
                </nav>
                <nav className="flex w-[400px] h-24 justify-center space-x-8 mt-5 ml-10 ">
                        <a href="#" className=' h-6 mt-3'><img src={vector} alt="" /></a>
                        <a href="#" className=' h-4 mt-1'><img src={ellipse} alt="" /></a>
                        <a href="#" className={`flex font-medium mt-2 ${selectedItem === 'username' ? 'text-blue-600' : ''}`} onClick={() => HandleClick('username')}>Username
                            <img src={DropArrow} alt="" className=' h-2 mt-2.5 ml-3' />
                        </a>
                </nav>
                <div className=' h-6 mt-7'>
                    <a href="https://"><img src={group} alt="" /></a>
                </div>
            </div>
            <div className=' mt-12 '>
                <img src={unsplash} alt="" className=' absolute' />
                
            </div>
            <div className=' h-[100px] w-[200px] ml-10 relative py-5 '>
                    <img src={frame1} alt="" className=' w-[150px] ml-8 '/>
                    <div className='flex h-[30px] w-[150px] bg-white ml-8 justify-center mt-1'>
                        <a href='#' className='flex'><button type='button'><p className=' font-semibold'>View Profile</p></button>
                        <img src={ArrowLeft} alt="" className=' h-4 ml-3 mt-2' /></a>
                    </div>

            </div>
        </header>
        
    )
}
export default Header;