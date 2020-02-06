import React from 'react';
import './App.less';
import CRUDTable from '../CRUDTable';

export class TestApp extends React.Component {
  columns = [
    {
      label: '테스트 컬럼',
      dataIndex: 'test_column',
      key: 'test_column',
    },
    {
      label: '테스트 컬럼2',
      dataIndex: 'test_column2',
      key: 'test_column2',
    },
    {
      label: '테스트 컬럼3',
      dataIndex: 'test_column3',
      key: 'test_column3',
    }
  ]
  data = [
    {
      key: 1,
      test_column: '야호',
      test_column2: '만세',
      test_column3: '만만세',
    },
    {
      key: 2,
      test_column: '4',
      test_column2: '5',
      test_column3: '6',
    },
    {
      key: 3,
      test_column: '7',
      test_column2: '8',
      test_column3: '9',
    },
  ]

  render(): React.ReactNode {
    return (
      <div>
        <h1>hello world</h1>
        <CRUDTable
          columns={this.columns}
          data={this.data}
          className={'table'}
        />
      </div>
    )
  }
}
