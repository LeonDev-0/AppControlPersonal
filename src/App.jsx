import './App.css'
import { RiDashboardLine, RiFileTextLine,RiLogoutBoxLine,RiSettings3Line, RiMoneyDollarBoxLine, RiShoppingBagLine } from "react-icons/ri"

function App() {

  return (
    <div className='min-h-screen grid grid-cols-6'>
      <div className=' flex flex-col justify-between col-span-1 p-8'>
        {/* //logotipo */}
        <div>
          <div className='text-center p-8'>
            <h1 className='font-bold uppercase tracking-[4px]'>DNSSys</h1>
          </div>
          {/* //Menu */}
          <nav className=''>
            <ul>
              <li>
                <a href="#" className='flex items-center text-gray-500 gap-4 hover:bg-purple-500 p-4 hover:text-white rounded-lg transition-colors'>
                  <RiDashboardLine />
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className='flex items-center text-gray-500 gap-4 hover:bg-purple-500 p-4 hover:text-white rounded-lg transition-colors'>
                  <RiShoppingBagLine/>
                  Ventas
                </a>
              </li>
              <li>
                <a href="#" className='flex items-center text-gray-500 gap-4 hover:bg-purple-500 p-4 hover:text-white rounded-lg transition-colors'>
                  <RiMoneyDollarBoxLine/>
                  Transaciones
                </a>
              </li>
              <li>
                <a href="#" className='flex items-center text-gray-500 gap-4 hover:bg-purple-500 p-4 hover:text-white rounded-lg transition-colors'>
                <RiFileTextLine /> 
                Reportes
                </a>
              </li>
              <li>
                <a href="#" className='flex items-center text-gray-500 gap-4 hover:bg-purple-500 p-4 hover:text-white rounded-lg transition-colors'>
                <RiSettings3Line /> 
                  Configuraciones
                </a>
              </li>
            </ul>
          </nav>
        </div>
          <a href="#" className=' flex items-center text-gray-500 gap-4 hover:bg-purple-500 p-1 hover:text-white rounded-lg transition-colors'>
            <RiLogoutBoxLine/>
            Cerrar sesion
          </a>
      </div>
      <div className=' col-span-5'>componente2</div>
    </div>
  )
}

export default App
