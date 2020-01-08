import React from 'react'
import axiosApi from '../utils/axios'
import { Table } from 'antd'

export const BasicTable = (url: string, columns: Array<any>) => {
  // axiosApi(url)
  //   .then(({ data }) => {
  //
  //   })
  /* remove all => 다시 짜야됨 */
  // TODO: columns props로 받아야됨 -> columns : { label: '', value: ''(default String), valueType: '' }
  return (
    <Table>
    </Table>
  )
}
