import React from 'react'
// import axiosApi from '../utils/axios'
import { Table } from 'antd'
import { ColumnProps } from 'antd/es/table'

interface BasicTableProps {
  url?: string,
  columns: Array<{ label: string, value: string, key: string }>,
  datas: Array<any>,
  numbering?: boolean
}

export const BasicTable: React.FC<BasicTableProps> = ( props ) => {

  // TODO: columns props로 받아야됨 -> columns : { labels: [], values: {}(default String), valueType: '' }
  // TODO: columns -> title: column.label[0~n], dataIndex: columns.value[0~n], key: columns.values[0~n], width ?, align ?
  // TODO: dataSource -> { `${data.key}`: data.value, key: `${data.key}_index` }
  const { url, columns, datas, numbering = true, ...rest } = props
  console.log('url : ', url)

  const tableColumns: ColumnProps<any>[] = columns.map(el => { return { title: el.label, dataIndex: el.value, key: el.value, align: 'center', ...el } })
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
      number: idx + 1,
      ...returnData
    }
    return returnData
  })

  return (
    <Table columns={tableColumns} dataSource={tableDatas} rowKey={record => record.uid} { ...rest } />
  )
}
