function Header({title}) {

    return (
        <header className="flex text-white bg-gray-700 rounded-lg m-2 ml-4 border-gray-800 border-4 shadow-gray-900 shadow-xl p-2 h-16 items-center">
            <h1 className="text-center flex-grow">{title}</h1>
            <button className="absolute right-4 top-10 transform -translate-y-1/2 rounded-lg bg-gray-400 p-2 border-gray-500 border-2">Add module</button>
        </header>
    );

}

export default Header;