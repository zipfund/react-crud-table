import React from 'react'
// import axiosApi from '../utils/axios'
import { Table } from 'antd'
import { ColumnProps } from 'antd/es/table'

export const BasicTable: any = (props: { url: string, columns: Array<{ label: string, value: string, key: string }>, datas: Array<any> }) => {

  // TODO: columns props로 받아야됨 -> columns : { labels: [], values: {}(default String), valueType: '' }
  // columns -> title: column.label[0~n], dataIndex: columns.value[0~n], key: columns.values[0~n], width ?, align ?
  // dataSource -> { `${data.key}`: data.value, key: `${data.key}_index` }
  const { url, columns, datas, ...rest } = props
  console.log('url : ', url)

  const tableColumns: ColumnProps<any>[] = columns.map(ele => { return { title: ele.label, dataIndex: ele.value, key: ele.value, align: 'center', ...ele } })
  tableColumns.push({title: 'N', dataIndex: 'number', key: 'number'})

  const tableDatas: Array<any> = datas.map((ele, idx) => {
    let returnData: object = {}
    for (let key in ele) {
      if (ele.hasOwnProperty(key)) {
        returnData = {
          ...returnData,
          [key]: ele[key]
        }
      }
    }
    returnData = {
      ...returnData,
      number: idx + 1
    }
    return returnData
  })

  return (
    <Table columns={tableColumns} dataSource={tableDatas} rowKey={record => record.uid} { ...rest } />
  )
}
