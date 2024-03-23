import users from '../assets/images/png/users.png'
import book from '../assets/images/png/book-open.png'
import briefcase from '../assets/images/png/briefcase.png'
import user from '../assets/images/png/user.png'
import groups from '../assets/images/png/Group 598.png'

const MainBody = () => {
    return(
        <div className=' mt-48 flex space-x-32 '>
            <ul>
                <div className=' ml-20'>
                    <li>
                        <a href="https://" className=' flex space-x-4 hover:text-blue-500'><img src={users} alt="" />
                        <h4 className=' font-semibold'>Cohorts</h4></a>
                    </li>
                </div>
                <div className=' ml-20 mt-10 '>
                    <li>
                        <a href="https://" className='flex space-x-4 hover:text-blue-500 transition-colors font-semibold'><img src={book} alt="" />
                        <h4 className=''>Programs</h4></a>
                    </li>
                </div>
                <div className=' ml-20 mt-10'>
                    <li>
                        <a href="https://" className='flex space-x-4 hover:text-blue-500 transition-colors font-semibold'><img src={briefcase} alt="" />
                        <h4>Instructors</h4></a>
                    </li>
                </div>
                <div className=' ml-20 mt-10'>
                    <li>
                        <a href="https://" className='flex space-x-4 hover:text-blue-500 transition-colors font-semibold'><img src={user} alt="" />
                        <h4>Learners</h4></a>
                    </li>
                </div>
            </ul>
            <div className=' font-extrabold'><h1>Cohorts</h1></div>
            <div className=' mt-44'>
                <img src={groups} alt="" />
                <div className=' font-bold ml-10'><h2>Empty Space</h2></div>
                <div>
                    <p className=' w-[400px]'>No cohort has been created yet. let's get you started by clicking the button below</p>
                </div>
            </div>
        </div>
    )
}
export default MainBody;