import React from 'react'
// import axiosApi from '../utils/axios'
import { Table } from 'antd'
import { ColumnProps } from 'antd/es/table'

export const BasicTable: any = (props: { url: string, columns: Array<{ label: string, value: string, key: string }>, datas: Array<any> }) => {
  // axiosApi(url)
  //   .then(({ data }) => {
  //
  //   })
  // TODO: columns props로 받아야됨 -> columns : { labels: [], values: {}(default String), valueType: '' }
  // columns -> title: column.label[0~n], dataIndex: columns.value[0~n], key: columns.values[0~n], width ?, align ?
  // dataSource -> { `${data.key}`: data.value, key: `${data.key}_index` }
  const { url, columns, datas } = props
  console.log('url : ', url)
  const tableColumns: ColumnProps<any>[] =columns.map(ele => { return { title: ele.label, dataIndex: ele.value, key: ele.value } })
  const tableDatas: Array<any> = datas.map((ele, idx) => { return { [ele.key]: ele.value, key: `${ele.key}_${idx}` } })
  return (
    <Table columns={tableColumns} dataSource={tableDatas} />
  )
}
