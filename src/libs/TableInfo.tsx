import React, { useState, useEffect } from 'react'
// import { generateToken } from '../utils/randToken'
import { ColumnProps, TableProps } from 'antd/es/table'
import { Popconfirm } from 'antd'

interface BasicTableProps extends TableProps<NewColumnProps> {
  url?: string,
  columns: Array<NewColumnProps>,
  datas: Array<any>,
  numbering?: boolean,
  options?: {
    edit?: boolean,
    delete?: boolean
  }
}

interface NewColumnProps extends ColumnProps<{ label: string, value: string, key?: string, render?: any }>{
  label: string,
  value: string,
  key?: string,
  render?: any
}

export const TableStore = ( (props: BasicTableProps) => {
  const { columns, datas, numbering = true, options = { edit: true, delete: true } } = props
  const [ tableColumns, setTableColumns ] = useState<ColumnProps<object>[] | []>([])
  const [ tableDatas, setTableDatas ] = useState<Array<any> | []>([])

  useEffect(() => {
    // console.log('before effect, before set', tableColumns, tableDatas)
    storeTableDatas(datas)
    storeTableColumns(columns)
  }, [])

  // console.log('after set', tableColumns, tableDatas)
  const storeTableDatas = (datas: Array<any>) => {
    const newDatas: Array<any> = datas.map((ele: object, idx) => {
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
    console.log('newDatas', newDatas)

    setTableDatas(newDatas)
  }
  const storeTableColumns = (columns: Array<NewColumnProps>) => {
    const newColumns: ColumnProps<object>[] = columns.map((el: NewColumnProps) => {
      const { label, value, key, render, ...rest } = el
      return {
        title: label,
        dataIndex: value,
        key: (key ? key : value),
        render: (render ? render : (text) => text),
        align: (rest && rest.align ? rest.align : 'center'),
        ...rest
      }
    })
    if(numbering) {
      newColumns.unshift({ title: 'N', dataIndex: 'number', key: 'number', align: 'center' })
    }
    if(options && options.delete) {
      newColumns.push({title: '삭제', dataIndex: 'remove', key: 'remove', align: 'center',
        render: (text: any, record: any) =>
          tableDatas.length >= 1 ? (
            <Popconfirm title="정말 삭제하시겠습니까?" placement="top" okText={"예"} cancelText={"아니요"} onConfirm={() => deleteTableData(record.key)}>
                <a>{ text }</a>
            </Popconfirm>
         ) : null
      })
    }
    console.log('newColumns', newColumns)

    setTableColumns(newColumns)
  }

  const deleteTableData = (key: any) => {
    setTableDatas(tableDatas.filter((item: any) => item.key !== key))
  }

  const addTableData = ( data: Array<any> ) => {
    const newTableDatas: Array<any> = tableDatas
    newTableDatas.push(data)
    setTableDatas(newTableDatas)
  }

  // const editTableData = () => {
  //
  // }

  function getTableColumns() { return tableColumns }
  function getTableDatas() { return tableDatas }

  return { getTableColumns, getTableDatas, storeTableColumns, storeTableDatas, deleteTableData, addTableData }
})

