import { useState, useEffect } from 'react'

export function useTableData(data: any) {
    const [tableData, setTableData] = useState(data)

    useEffect(() => {
        setTableData(data)
    }, [data])

    return {
        tableData,
        setTableData
    }
}