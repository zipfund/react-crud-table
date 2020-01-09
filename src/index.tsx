import React from 'react'
import { BasicTable } from './libs/BasicTable'

interface IProps {
  text: string
}

const columns: Array<{ label: string, value: string, key: string }> = [
  {
    label: '테스트 컬럼',
    value: 'test_column',
    key: 'test_column',
  },
  {
    label: '테스트 컬럼2',
    value: 'test_column2',
    key: 'test_column2',
  },
  {
    label: '테스트 컬럼3',
    value: 'test_column3',
    key: 'test_column3',
  }
]

const datas: Array<any> = [
  {
    key: 'test_column',
    value: '1'
  },
  {
    key: 'test_column2',
    value: '2'
  },
  {
    key: 'test_column3',
    value: '3'
  },
]

const App = (props: IProps) => {
  const { text } = props
  return (
    <div>
      Hello world { text }
      <BasicTable url={'https://test.url'} columns={columns} datas={datas} />
    </div>
  )
}

export default App
