import logo from '../logo.svg';

function Sidebar() {
	return (
		<div className="flex flex-col text-white bg-gray-700 w-72 h-[98vh] fixed rounded-lg m-2 border-gray-800 border-4 shadow-gray-900 shadow-xl">
			<div className='flex text-center items-center'>
				<img className="w-16" src={logo} alt="logo"/>
				<h1>Productivity App</h1>
			</div>
			<hr className='border-gray-500' />
		</div>
	);
}

export default Sidebar;
