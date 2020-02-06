import React from 'react'
import {ColumnProps, TableProps} from 'antd/es/table'
import { Table } from 'antd'
import { useTableData } from './useTableData'
import { useTableColumns } from './useTableColumns'
import 'antd/dist/antd.css'

export interface CRUDTableProps extends TableProps<any>{
    data: any[],
    columns: ColumnProps<any>[]
}

const CRUDTable: React.FC<CRUDTableProps> = ({ data, columns }) => {
    const { tableData } = useTableData(data)
    const { tableColumns } = useTableColumns(columns)

    return (
        <Table dataSource={tableData} columns={tableColumns} />
    )
}

CRUDTable.defaultProps = {
    data: [],
    columns: []
}

export default CRUDTable