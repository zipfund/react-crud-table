import React from 'react';
interface BasicTableProps {
    url?: string;
    columns: Array<{
        label: string;
        value: string;
        key: string;
    }>;
    datas: Array<any>;
    numbering?: boolean;
}
export declare const BasicTable: React.FC<BasicTableProps>;
export {};
