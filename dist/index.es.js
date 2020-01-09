import React from 'react';
import { Table } from 'antd';

const BasicTable = (props) => {
    // axiosApi(url)
    //   .then(({ data }) => {
    //
    //   })
    // TODO: columns props로 받아야됨 -> columns : { labels: [], values: {}(default String), valueType: '' }
    // columns -> title: column.label[0~n], dataIndex: columns.value[0~n], key: columns.values[0~n], width ?, align ?
    // dataSource -> { `${data.key}`: data.value, key: `${data.key}_index` }
    const { url, columns, datas } = props;
    console.log('url : ', url);
    const tableColumns = columns.map(ele => { return { title: ele.label, dataIndex: ele.value, key: ele.value }; });
    const tableDatas = datas.map((ele, idx) => { return { [ele.key]: ele.value, key: `${ele.key}_${idx}` }; });
    return (React.createElement(Table, { columns: tableColumns, dataSource: tableDatas }));
};

const App = (props) => {
    const { text } = props;
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
    ];
    const datas = [
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
    ];
    return (React.createElement("div", null,
        "Hello world ",
        text,
        React.createElement(BasicTable, { url: 'https://test.url', columns: columns, datas: datas })));
};

export default App;
//# sourceMappingURL=index.es.js.map
