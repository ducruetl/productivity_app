import { useState } from 'react';
import user_picture from '../images/user-default.png'


function Header({title}) {

    const [isVisible, setIsVisible] = useState(false);

    function UserMenu() {
    
        return (
            <div>
                {isVisible && <div className='bg-black h-32 w-16 absolute right-3 top-16'></div>}
            </div>
        )
    }
    

    return (
        <header className="flex text-white bg-gray-700 rounded-lg m-2 ml-4 border-gray-800 border-4 shadow-gray-900 shadow-xl p-2 h-16 items-center">
            <h1 className="text-center flex-grow">{title}</h1>
            <button className="absolute left-72 top-10 transform -translate-y-1/2 rounded-lg bg-gray-400 p-2 border-gray-500 border-2">Add module</button>
            <img src={user_picture} alt="profile"  className='rounded-full w-12 h-12' onClick={() => {setIsVisible(!isVisible)}}/>
            <UserMenu/>
        </header>
    );

}

export default Header;
