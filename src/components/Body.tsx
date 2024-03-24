import users from '../assets/images/png/users.png'
import book from '../assets/images/png/book-open.png'
import user from '../assets/images/png/user.png'
import groups from '../assets/images/png/Group 598.png'
import {ReactComponent as BriefcaseIcon} from '../assets/images/svg/briefcase.svg'
import React, { useState } from 'react'

const MainBody: React.FC = () => {

    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    
    const HandleClick = (item: string) =>{
        setSelectedItem(item)
    }
    return(
        <div className=' mt-48 flex space-x-32 '>
            <ul>
                <div className=' ml-20'>
                    <li>
                        <a href="#" className={`flex space-x-4 ${selectedItem ==='cohorts' ? 'text-blue-500' : ''}`} onClick={() => HandleClick('cohorts')}>
                            <img src={user} alt="" className=' absolute'/>
                            <img src={user} alt="" className=''/>
                            <h4 className=' font-semibold'>Cohorts</h4>
                        </a>
                    </li>
                </div>
                <div className=' ml-20 mt-10 '>
                    <li>
                        <a href="#" className={`flex space-x-4 ${selectedItem ==='programs' ? 'text-blue-500' : ''}`} onClick={() => HandleClick('programs')}>
                            <img src={book} alt="" />
                            <h4 className=' font-semibold'>Programs</h4>
                        </a>
                    </li>
                </div>
                <div className=' ml-20 mt-10'>
                    <li>
                        <a href="#" className={`flex space-x-4 ${selectedItem ==='instructors' ? 'text-blue-500' : ''}`} onClick={() => HandleClick('instructors')}>
                            <BriefcaseIcon className=' hover:to-blue-500'/>
                            <h4 className=' font-semibold'>Instructors</h4>
                        </a>
                    </li>
                </div>
                <div className=' ml-20 mt-10'>
                    <li>
                        <a href="#" className={`flex space-x-4 ${selectedItem ==='learners' ? 'text-blue-500' : ''}`} onClick={() => HandleClick('learners')}>
                            <img src={user} alt="" />
                            <h4 className=' font-semibold'>Learners</h4>
                        </a>
                    </li>
                </div>
            </ul>
            <div className=' font-extrabold'><h1>Cohorts</h1></div>
            <div className=' mt-44'>
                <img src={groups} alt="" />
                <div className=' font-bold ml-5'><h2>Empty Space</h2></div>
                <div className='h-20 w-[200px] px-7 py-5 rounded-2xl'>
                    <a href="#"><button className='bg-blue-500 h-[40px] w-[150px]  rounded '><p className=' font-semibold text-white'>Create a Cohort</p></button></a>
                </div>
            </div>
        </div>
    )
}
export default MainBody;