import React, { useState } from 'react';
import Modal from 'react-modal';


const FormularioModal = ({ open, onOk, onCancel }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes procesar los datos del formulario
    console.log(formData);
    onOk();
  };

  return (
    <Modal
      isOpen={open}
      onRequestClose={onCancel}
      className="fixed inset-0 flex items-center justify-center z-50"
      overlayClassName="fixed inset-0 bg-black/50"
    >
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">Nuevo Producto</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="nombre" className="block text-gray-700 font-bold mb-2">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="descripcion" className="block text-gray-700 font-bold mb-2">
              Descripción
            </label>
            <textarea
              id="descripcion"
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            ></textarea>
          </div>
          <div className="mb-6">
            <label htmlFor="precio" className="block text-gray-700 font-bold mb-2">
              Precio
            </label>
            <input
              type="number"
              id="precio"
              name="precio"
              value={formData.precio}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="button"
              className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
              onClick={onCancel}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default FormularioModal;