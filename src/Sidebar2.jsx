import React from 'react'
import {
  RiDashboardLine,
  RiFileTextLine,
  RiLogoutBoxLine,
  RiSettings3Line,
  RiMoneyDollarBoxLine,
  RiShoppingBagLine,
} from "react-icons/ri";

const Sidebar2 = () => {
  return (
      <div className="fixed md:static top-0 left-0 w-full h-full  border-r overflow-y-scroll md:overflow-hidden col-span-1 p-8 md:flex md:flex-col md:items-center">
        {/* //logotipo */}
        <div className="text-center p-8">
          <h1 className="font-bold uppercase tracking-[4px]">DNSSys</h1>
        </div>
        {/* //Menu */}
        <div className="flex flex-col justify-between  h-full">
          <nav className="">
            <ul>
              <li>
                <a
                  href="#"
                  className="flex items-center text-gray-500 gap-4 hover:bg-purple-500 p-4 hover:text-white rounded-lg transition-colors"
                >
                  <RiDashboardLine />
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="/ventas"
                  className="flex items-center text-gray-500 gap-4 hover:bg-purple-500 p-4 hover:text-white rounded-lg transition-colors"
                >
                  <RiShoppingBagLine />
                  Ventas
                </a>
              </li>
              <li>
                <a
                  href="/transaciones"
                  className="flex items-center text-gray-500 gap-4 hover:bg-purple-500 p-4 hover:text-white rounded-lg transition-colors"
                >
                  <RiMoneyDollarBoxLine />
                  Transaciones
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-gray-500 gap-4 hover:bg-purple-500 p-4 hover:text-white rounded-lg transition-colors"
                >
                  <RiFileTextLine />
                  Reportes
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center text-gray-500 gap-4 hover:bg-purple-500 p-4 hover:text-white rounded-lg transition-colors"
                >
                  <RiSettings3Line />
                  Configuraciones
                </a>
              </li>
            </ul>
          </nav>
          <a
            href="#"
            className=" flex items-center text-gray-500 gap-4 hover:bg-purple-500 p-1 hover:text-white rounded-lg transition-colors"
          >
            <RiLogoutBoxLine />
            Cerrar sesion
          </a>
        </div>
      </div>
  )
}

export default Sidebar2