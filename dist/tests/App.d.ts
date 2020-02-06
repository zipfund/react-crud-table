import React from 'react';
import './App.less';
export declare class TestApp extends React.Component {
    columns: {
        label: string;
        value: string;
        key: string;
    }[];
    datas: {
        test_column: string;
        test_column2: string;
        test_column3: string;
        remove: string;
    }[];
    render(): React.ReactNode;
}
