import React from 'react'
import { useState, useEffect } from 'react'
import { ColumnProps } from 'antd/es/table'
import {Popconfirm} from 'antd'

const setSettings = (columns: ColumnProps<any>[]) => {
    if(!columns.find((column: ColumnProps<any>) => column.key === 'settings')) {
        columns.push({
            key: 'settings',
            title: '관리',
            render: () => (
                <Popconfirm title="정말 삭제하시겠습니까?" placement="top" okText={"예"} cancelText={"아니요"} onConfirm={() => {}}>
                    <span>삭제</span>
                </Popconfirm>
            )
        })
    }
}

export function useTableColumns(columns: ColumnProps<any>[]) {
    const [tableColumns, setTableColumns] = useState()

    useEffect(() => {
        setSettings(columns)
        setTableColumns(columns)
    }, [columns])

    return {
        tableColumns,
        setTableColumns
    }
}

