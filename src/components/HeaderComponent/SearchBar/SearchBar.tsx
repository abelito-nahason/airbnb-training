
import VerticalDivider from '../../common/VerticalDivider/VerticalDivider';
import { CiSearch } from "react-icons/ci";
import SearchBarInput from './SearchBarInput/SearchBarInput';
import SearchBarStyle from './SearchBar.module.css'
import { useState } from 'react';
import LocationCard from './SearchBarLocationCard/SearchBarLocationCard';
type SearchBarProps = {
    extended?:boolean;
}


const SearchBar = ({extended}:SearchBarProps) => {

    const [locationPop, setLocationPop] = useState(false)
    const [datePop, setDatePop] = useState(false)
    return (
        <>
            { extended &&
            <div className='justify-center flex ' >
                {/* px-6 py-4 */}
                <div className='relative bg-white flex justify-between flex-row rounded-full items-stretch pointer-events-none focus-within:bg-gray-200'>

                    <div tabIndex={0} onFocus={()=>setLocationPop(true)} 
                                      onBlur={()=>setLocationPop(false)} 
                                      className={`w-72 rounded-full ${SearchBarStyle.focusBehaviour}`}>
                        <div className='px-6 py-4'>
                            <p className='font-inter'>Location</p>
                            <SearchBarInput type='text' placeholder='Where are you going?'/>
                        </div>

                        { locationPop && 
                        <div className={`absolute bg-white px-6 py-4 rounded-3xl top-[5.5rem] w-[29rem]`}>
                            <p className='font-bold pb-4'>Search based on region</p>
                            <div className='flex gap-1 justify-center flex-wrap'> 
                                <LocationCard src='/img/flexible.jpg' title='Flexible' />
                                <LocationCard src='/img/europe.webp' title='Europe' />
                                <LocationCard src='/img/malaysia.webp' title='Malaysia' />
                                <LocationCard src='/img/australia.webp' title='Australia' />
                                <LocationCard src='/img/japan.webp' title='Japan' />
                                <LocationCard src='/img/us.webp' title='United States' />
                            </div>
                        </div>
                        }

                    </div>

                    <VerticalDivider/>

                    <div onFocus={()=>setDatePop(true)} onBlur={()=>setDatePop(false)} className='flex-row flex'>
                        <div tabIndex={0}
                             className={`w-44 px-6 py-4 rounded-full ${SearchBarStyle.focusBehaviour}`}>
                            <p>Check in</p>
                            <p className='text-gray-400'>Add dates</p>
                        </div>

                        <VerticalDivider/>

                        <div tabIndex={0} className={`w-44 px-6 py-4 rounded-full ${SearchBarStyle.focusBehaviour}`}>
                            <p>Check out</p>
                            {/* <p className='text-gray-400'>Add dates</p> */}
                            <p className='text-gray-400'>Add dates</p>
                        </div>
                    </div>

                    <VerticalDivider/>

                    <div className='flex w-72 px-6 justify-between items-center gap-12 rounded-full hover:bg-gray-200'>
                        <div>
                            <p>Guests</p>
                            <p className='text-gray-400'>Add guests</p>
                        </div>
                        <div className='rounded-full w-14 h-14 flex flex-grow-2 justify-evenly items-center bg-airbnb hover:bg-red-700 transition ease-in-out duration-500'>
                            {/* <p>Find</p> */}
                            <CiSearch className='text-white text-3xl'/>
                        </div>
                    </div>

                    { datePop && <div onMouseDown={(e)=>e.preventDefault()} className={`absolute pointer-events-auto bg-white px-6 py-4 rounded-3xl top-[5.5rem] w-full`}>  
                        <p className='font-bold pb-4'>Search based on region</p>
                        <div className='flex gap-1 justify-center flex-wrap'> 
                            <LocationCard src='/img/flexible.jpg' title='Flexible' />
                            <LocationCard src='/img/europe.webp' title='Europe' />
                            <LocationCard src='/img/malaysia.webp' title='Malaysia' />
                            <LocationCard src='/img/australia.webp' title='Australia' />
                            <LocationCard src='/img/japan.webp' title='Japan' />
                            <LocationCard src='/img/us.webp' title='United States' />
                        </div>
                    </div>}
                </div>
            </div>
            }
        </>
    )
    
}

export default SearchBar