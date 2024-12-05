import logo from '../logo.svg';

function Sidebar() {
	return (
		<div className="flex flex-col text-white bg-gray-900 w-72 h-screen">
			<div className='flex text-center items-center'>
				<img className="w-16" src={logo} alt="logo"/>
				<h1>Productivity App</h1>
			</div>
			<hr className='border-gray-700' />
		</div>
	);
}

export default Sidebar;
