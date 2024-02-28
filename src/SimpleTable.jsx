import { FaRegTrashCan } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";
import FormularioModal from "./FormularioModal";
import { Button } from "antd";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import data from "./MOCK_DATA .json";
import { useState } from "react";

const SimpleTable = () => {
  const [isOpen, setIsOpen]= useState(false)

 
  const openModal = ()=>setIsOpen(true)
  const closeModal = ()=>setIsOpen(false)

  const handleSubmit = (item)=>{
    alert('guardado exitosamente')
    setIsOpen(false)
  }
  

  const handleEdit=row=>{
    alert('editando...')
    const confirmDelete = confirm("")
  }
  const handleDelete=row=>{
    alert('Eliminando...')
  }

  const columns = [
    {
      header: "Name",
      accessorKey: "name",
    },
    {
      header: "Category",
      accessorKey: "category",
    },
    {
      header: "Brand",
      accessorKey: "brand",
    },
    {
      header: "Storage",
      accessorKey: "storage",
    },
    {
      header: "Display",
      accessorKey: "display",
    },
    {
      header:"Actions",
      cell:({row})=>(
        <div className=" flex gap-4 text-xl">
          <button className="text-green-500" onClick={handleEdit}><CiEdit/></button>
          <button className = "text-red-500" onClick={handleDelete}><FaRegTrashCan/></button>
        </div>
      )
    }
  ];

  const [filtering, setFiltering] = useState("");
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter: filtering,
    },
    onGlobalFilterChange: setFiltering,
  });
  return (

    <>
    <FormularioModal
    open={isOpen} 
    onOk={handleSubmit}
    onCancel={closeModal}
    />
      <div className=" flex justify-between">
        <input
          type="text"
          value={filtering}
          onChange={(e) => setFiltering(e.target.value)}
          placeholder="Buscar..."
          className="p-3 w-1/2 border border-violet-500 rounded-xl my-3 ml-3"
        />
        <Button type="default" onClick={openModal}>Nuevo Producto</Button>
      </div>
      <table className="border-collapse w-full text-sm">
        <thead>
          {table.getHeaderGroups().map((h) => (
            <tr key={h.id}>
              {h.headers.map((header) => (
                <th
                  key={header.id}
                  className="bg-black text-white font-bold p-3 text-left border border-black uppercase"
                >
                  {header.column.columnDef.header}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((r) => (
            <tr
              key={r.id}
              className=" cursor-pointer border-b border-black hover:bg-gray-800 hover:text-white"
            >
              {r.getVisibleCells().map((cell) => (
                <td key={cell.id} className="p-3">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex gap-4">
        <button onClick={() => table.setPageIndex(0)}>PrimerPagina</button>
        <button onClick={() => table.previousPage()}>Anterior</button>
        <button onClick={() => table.nextPage()}>Siguiete</button>
        <button onClick={() => table.setPageIndex(table.getPageCount() - 1)}>
          Ultima Pagina
        </button>
      </div>
    </>
  );
};

export default SimpleTable;
