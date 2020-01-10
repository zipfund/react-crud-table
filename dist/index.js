'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var antd = require('antd');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

const BasicTable = (props) => {
    // TODO: columns props로 받아야됨 -> columns : { labels: [], values: {}(default String), valueType: '' }
    // columns -> title: column.label[0~n], dataIndex: columns.value[0~n], key: columns.values[0~n], width ?, align ?
    // dataSource -> { `${data.key}`: data.value, key: `${data.key}_index` }
    const { url, columns, datas } = props, rest = __rest(props, ["url", "columns", "datas"]);
    console.log('url : ', url);
    const tableColumns = columns.map(ele => { return Object.assign({ title: ele.label, dataIndex: ele.value, key: ele.value, align: 'center' }, ele); });
    tableColumns.push({ title: 'N', dataIndex: 'number', key: 'number' });
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
    return (React.createElement(antd.Table, Object.assign({ columns: tableColumns, dataSource: tableDatas, rowKey: record => record.uid }, rest)));
};

const App = (props) => {
    const { columns, datas } = props, rest = __rest(props, ["columns", "datas"]);
    return (React.createElement(BasicTable, Object.assign({ url: 'https://test.url', columns: columns, datas: datas }, rest)));
};

exports.default = App;
//# sourceMappingURL=index.js.map
