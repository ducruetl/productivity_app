import '../index.css'
import Sidebar from './Sidebar'
import Header from './Header'

function App() {
  return (
    <div className="flex w-full bg-gray-400">
      <Sidebar/>
      
      <div className='w-[86vw] flex flex-col ml-[14vw]'>
        <Header title="Default"/>
        <div className='w-full h-screen'>
					
        </div>
      </div>
    </div>
  );
}

export default App;
