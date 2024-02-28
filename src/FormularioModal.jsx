import React from 'react'
import {Modal}from "antd";
const FormularioModal = ({open,onCancel,onOk}) => {
  return (
    <Modal 
    title="Nuevo Producto"
    open = {open}
    onOk={onOk}
    onCancel={onCancel}
    >
      <button style={{visibility:'visible'}}>OK</button>
    </Modal>

  )
}

export default FormularioModal