import { FiGlobe } from 'react-icons/fi'
import { RxHamburgerMenu } from "react-icons/rx";
import Header from './Header/Header';
import SearchBar from './SearchBar/SearchBar';



const HeaderComponent = () => {

    return (
        <div className='bg-black'>
            <div className="hidden flex-row justify-between h-16 px-16 items-center relative lg:flex">
                <img src='/img/airbnb-icon.svg' alt="Logo" />
                <div className="absolute flex flex-row gap-8 top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4">
                        <Header title='Places to stay' selected />
                        <Header title='Experiences'/>
                        <Header title='Online experiences'/>
                </div>
                <div className="flex flex-row gap-8 items-center" >
                    <p className='text-white'>Become a Host</p>
                    <FiGlobe className='text-white text-xl'/>
                    <div className='bg-white flex flex-row items-center gap-4 p-2 rounded-full'>
                        <RxHamburgerMenu className='text-xl'/>
                        <img src='/img/avatar.png' alt='avatar' />
                    </div>               
                </div>
            </div>
            <SearchBar extended/>        
        </div>
    )

}

export default HeaderComponent