import React from 'react';
import { Table } from 'antd';

const BasicTable = (props) => {
    // TODO: columns props로 받아야됨 -> columns : { labels: [], values: {}(default String), valueType: '' }
    // columns -> title: column.label[0~n], dataIndex: columns.value[0~n], key: columns.values[0~n], width ?, align ?
    // dataSource -> { `${data.key}`: data.value, key: `${data.key}_index` }
    const { url, columns, datas } = props;
    console.log('url : ', url);
    const tableColumns = columns.map(ele => { return Object.assign({ title: ele.label, dataIndex: ele.value, key: ele.value }, ele); });
    const tableDatas = datas.map((ele, idx) => {
        let returnData = {};
        for (let key in ele) {
            if (ele.hasOwnProperty(key)) {
                returnData = Object.assign(Object.assign({}, returnData), { [key]: ele[key] });
            }
        }
        returnData = Object.assign(Object.assign({}, returnData), { number: idx + 1 });
        return returnData;
    });
    return (React.createElement(Table, { columns: tableColumns, dataSource: tableDatas, rowKey: record => record.uid }));
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
    ];
    return (React.createElement("div", null,
        "Hello world ",
        text,
        React.createElement(BasicTable, { url: 'https://test.url', columns: columns, datas: datas })));
};

export default App;
//# sourceMappingURL=index.es.js.map
