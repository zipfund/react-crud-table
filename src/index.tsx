import React from 'react'
import { BasicTable } from './libs/BasicTable'

interface IProps {
  columns: Array<{ label: string, value: string, key: string }>,
  datas: Array<any>
}

const App = (props: IProps) => {
  const { columns, datas, ...rest } = props

  return (
    <BasicTable
      url={'https://test.url'}
      columns={columns}
      datas={datas}
      { ...rest }
    />
  )
}

export default App
