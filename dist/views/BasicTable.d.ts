import React from 'react';
import { TableProps } from 'antd/es/table';
interface BasicTableProps extends TableProps<{
    label: string;
    value: string;
    key: string;
}> {
    url?: string;
    columns: Array<{
        label: string;
        value: string;
        key: string;
    }>;
    datas: Array<any>;
    numbering?: boolean;
    options?: {
        edit: boolean;
        delete: boolean;
    };
}
export declare const BasicTable: React.FC<BasicTableProps>;
export {};
