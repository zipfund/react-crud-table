import React from 'react';
import { Table } from 'antd';

const BasicTable = (props) => {
    // TODO: columns props로 받아야됨 -> columns : { labels: [], values: {}(default String), valueType: '' }
    // columns -> title: column.label[0~n], dataIndex: columns.value[0~n], key: columns.values[0~n], width ?, align ?
    // dataSource -> { `${data.key}`: data.value, key: `${data.key}_index` }
    const { url, columns, datas } = props;
    console.log('url : ', url);
    const tableColumns = columns.map(ele => { return Object.assign({ title: ele.label, dataIndex: ele.value, key: ele.value, align: 'center' }, ele); });
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
    const { text, columns, datas } = props;
    return (React.createElement("div", null,
        "Hello world ",
        text,
        React.createElement(BasicTable, { url: 'https://test.url', columns: columns, datas: datas })));
};

export default App;
//# sourceMappingURL=index.es.js.map
