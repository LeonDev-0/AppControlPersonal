import { useReactTable } from '@tanstack/react-table'
import React from 'react'
import data from './MOCK_DATA .json'

const SimpleTable = () => {

  const columns =[
    
  ]

  useReactTable({data,columns})
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>1</td>
        </tr>
      </tbody>
    </table>
  )
}

export default SimpleTable