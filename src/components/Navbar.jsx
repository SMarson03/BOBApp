import React from 'react';
import StaggeredDropDown from './StaggeredDropDown';
import StaggeredDropDownii from './StaggeredDropDownii';

function Navbar() {
    return (
    <>
    <ul className='navbar mt-4 text-white flex space-x-8 justify-center items-baseline items-baseline font flex-row'>
    <li className='w-16 h-8 items-center'><a href='/Home'>Home</a></li>
    <li className='w-16 h-8 items-center'><StaggeredDropDownii/></li>
    <li className='w-16 h-8 items-center'><StaggeredDropDown/></li>
    <li className='w-16 h-8 items-center'><a href='/Arts'>Arts</a></li>
    <li className='w-16 h-8 items-center'><a href='/Therapy'>Therapy</a></li>
    <li className='w-16 h-8 items-center'><a href='/Law'>Law</a></li>
    <li className='w-16 h-8 items-center'><a href='/About'>About</a></li>
    <li className='w-16 h-8 items-center'><a href='/Contact'>Contact</a></li>
    </ul>
    <hr className='line'/>
    </>
    )
}
export default Navbar;