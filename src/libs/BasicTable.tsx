import React from 'react'
// import axiosApi from '../utils/axios'
import { Popconfirm, Table } from 'antd'
import { ColumnProps } from 'antd/es/table'
import { useObserver } from 'mobx-react-lite'


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
  const tableColumns: ColumnProps<any>[] = columns.map(el => {
    return { title: el.label, dataIndex: el.value, key: el.value, align: 'center', ...el }
  })
  // const tableColumns: ColumnProps<any>[] = []
  // columns.map(el => {
  //   tableColumns.push({ title: el.label, dataIndex: el.value, key: el.value, align: 'center' })
  // })
  // const tableColumns: ColumnProps<any>[] = useLocalStore(() => columns.map(el => {
  //   return { title: el.label, dataIndex: el.value, key: el.value, align: 'center' }
  // }))
  if(numbering) {
    tableColumns.unshift({ title: 'N', dataIndex: 'number', key: 'number', align: 'center' })
  }
  tableColumns.push({title: '삭제', dataIndex: 'remove', key: 'remove',
    render: (text: any, record: any) =>
      dataSources.length >= 1 ? (
        <Popconfirm title="정말 삭제하시겠습니까?" onConfirm={() => handleDelete(record.key)}>
          <a>{ text }</a>
        </Popconfirm>
      ) : null
  })
  console.log(tableColumns)

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
      ...returnData,
      remove: '삭제'
    }
    return returnData
  })
  console.log(dataSources)

  // const dataSources: Array<any> = []
  // datas.map((ele, idx) => {
  //   let returnData: object = {}
  //   for (let key in ele) {
  //     if (ele.hasOwnProperty(key)) {
  //       returnData = {
  //         ...returnData,
  //         [key]: ele[key]
  //       }
  //     }
  //   }
  //   returnData = {
  //     number: idx + 1,
  //     ...returnData,
  //     remove: '삭제'
  //   }
  //   dataSources.push(returnData)
  // })

  // const dataSources: Array<any> = useLocalStore(() =>  datas.map((ele, idx) => {
  //   let returnData: object = {}
  //   for (let key in ele) {
  //     if (ele.hasOwnProperty(key)) {
  //       returnData = {
  //         ...returnData,
  //         [key]: ele[key]
  //       }
  //     }
  //   }
  //   returnData = {
  //     number: idx + 1,
  //     ...returnData,
  //     remove: '삭제'
  //   }
  //   return returnData
  // }))

  console.log('tableColumns after : ', tableColumns[0].title)

  const handleDelete = (key: any) => {
    dataSources.filter(item => item.key !== key)
    // const dataSource = [...this.state.dataSource];
    // this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
  }

  return useObserver(() =>
    <Table columns={tableColumns} dataSource={dataSources} rowKey={record => record.uid} { ...rest } />
  )
}
