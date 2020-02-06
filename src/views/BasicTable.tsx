import React from 'react'
// import axiosApi from '../utils/axios'
import { Popconfirm, Table } from 'antd'
import { ColumnProps, TableProps } from 'antd/es/table'
import { useLocalStore, observer } from 'mobx-react-lite'
import { TableStore } from '../libs/TableInfo'

interface BasicTableProps extends TableProps<{ label: string, value: string, key: string }> {
  url?: string,
  columns: Array<{ label: string, value: string, key: string }>,
  datas: Array<any>,
  numbering?: boolean,
  options?: {
    edit: boolean,
    delete: boolean
  }
}

export const BasicTable: React.FC<BasicTableProps> = observer(( props ) => {

  // TODO: columns props로 받아야됨 -> columns : { labels: [], values: {}(default String), valueType: '' }
  // TODO: columns -> title: column.label[0~n], dataIndex: columns.value[0~n], key: columns.values[0~n], width ?, align ?
  // TODO: dataSource -> { `${data.key}`: data.value, key: `${data.key}_index` }
  const { url, columns, datas, numbering = true, ...rest } = props
  const tableStore = TableStore(props)
  console.log(tableStore)
  // tableStore.storeTableDatas(datas)
  // tableStore.storeTableColumns(columns)

  const tableColumns: ColumnProps<any>[] = columns.map(el => {
    return { title: el.label, dataIndex: el.value, key: el.value, align: 'center', ...el }
  })
  if(numbering) {
    tableColumns.unshift({ title: 'N', dataIndex: 'number', key: 'number', align: 'center' })
  }
  tableColumns.push({title: '삭제', dataIndex: 'remove', key: 'remove',
    render: (text: any, record: any) =>
      dataSources.length >= 1 ? (
        <Popconfirm title="정말 삭제하시겠습니까?" placement="top" okText={"예"} cancelText={"아니요"} onConfirm={() => store.deleteData(record.key)}>
          <a>{ text }</a>
        </Popconfirm>
      ) : null
  })

  const dataSources: Array<any> = datas.map((ele, idx) => {
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
      key: `table_data_${idx+1}`,
      ...returnData,
      remove: '삭제',
    }
    return returnData
  })

  const store = useLocalStore(() => ({
    tableColumns: tableColumns,
    dataSources: dataSources,
    deleteData(key: any) {
      store.dataSources = store.dataSources.filter((item: any) => item.key !== key)
    }
  }))
  // console.log('tableColumns', tableColumns)
  // console.log('store.tableColumns', store.tableColumns)
  //
  // console.log('dataSources', dataSources)
  // console.log('store.dataSources', store.dataSources)

  // console.log('dataSource', store.dataSources)
  console.log('getTableDatas', tableStore.getTableDatas())
  return (
    <>
      <Table columns={store.tableColumns} dataSource={store.dataSources} rowKey={record => record.uid} { ...rest } />
      <Table columns={tableStore.getTableColumns()} dataSource={tableStore.getTableDatas()} rowKey={record => record.uid} { ...rest } />
    </>
  )
})
