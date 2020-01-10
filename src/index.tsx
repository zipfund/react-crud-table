import React from 'react'
import { BasicTable } from './libs/BasicTable'

interface IProps {
  text: string
}

const App = (props: IProps) => {
  const { text } = props
  const columns = [
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

  const datas = [
    {
      test_column: '1',
      test_column2: '2',
      test_column3: '3'
    },
    {
      test_column: '4',
      test_column2: '5',
      test_column3: '6'
    },
    {
      test_column: '7',
      test_column2: '8',
      test_column3: '9'
    },
  ]
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
