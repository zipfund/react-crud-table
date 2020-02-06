import { ColumnProps, TableProps } from 'antd/es/table';
interface BasicTableProps extends TableProps<NewColumnProps> {
    url?: string;
    columns: Array<NewColumnProps>;
    datas: Array<any>;
    numbering?: boolean;
    options?: {
        edit?: boolean;
        delete?: boolean;
    };
}
interface NewColumnProps extends ColumnProps<{
    label: string;
    value: string;
    key?: string;
    render?: any;
}> {
    label: string;
    value: string;
    key?: string;
    render?: any;
}
export declare const TableStore: (props: BasicTableProps) => {
    getTableColumns: () => ColumnProps<object>[] | [];
    getTableDatas: () => any[] | [];
    storeTableColumns: (columns: NewColumnProps[]) => void;
    storeTableDatas: (datas: any[]) => void;
    deleteTableData: (key: any) => void;
    addTableData: (data: any[]) => void;
};
export {};
