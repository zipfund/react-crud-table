import React from 'react';
import './App.less';
import { BasicTable } from '../views/BasicTable';

export class TestApp extends React.Component {
  columns = [
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
  datas = [
    {
      test_column: '야호',
      test_column2: '만세',
      test_column3: '만만세',
      remove: '삭제'
    },
    {
      test_column: '4',
      test_column2: '5',
      test_column3: '6',
      remove: '삭제'
    },
    {
      test_column: '7',
      test_column2: '8',
      test_column3: '9',
      remove: '삭제'
    },
  ]

  render(): React.ReactNode {
    return (
      <div>
        <h1>hello world</h1>
        <BasicTable
          url={'https://test.url'}
          columns={this.columns}
          datas={this.datas}
          className={'table'}
        />
        {/*<BasicTable*/}
          {/*url={'https://test.url'}*/}
          {/*columns={this.columns}*/}
          {/*datas={this.datas}*/}
          {/*className={'table'}*/}
          {/*numbering={false}*/}
          {/*options={{ delete: false}}*/}
        {/*/>*/}
      </div>
    )
  }
}
