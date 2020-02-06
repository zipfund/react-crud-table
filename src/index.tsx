import React from 'react'
import CRUDTable from './CRUDTable'

interface IProps {
  columns: Array<{ label: string, value: string, key: string }>,
  data: Array<any>
}

const App = (props: IProps) => {
  const { columns, data } = props

  return (
    <CRUDTable
      columns={columns}
      data={data}
    />
  )
}

export default App
