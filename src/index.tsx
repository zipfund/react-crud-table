import React from 'react'
import { BasicTable } from './libs/BasicTable'

interface IProps {
  text: string,
  columns: Array<{ label: string, value: string, key: string }>,
  datas: Array<any>
}

const App = (props: IProps) => {
  const { text, columns, datas } = props

  return (
    <div>
      Hello world { text }
      <BasicTable
        url={'https://test.url'}
        columns={columns}
        datas={datas}
      />
    </div>
  )
}

export default App
