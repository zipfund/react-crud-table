/// <reference types="react" />
import 'antd/dist/antd.css';
interface IProps {
    columns: Array<{
        label: string;
        value: string;
        key: string;
    }>;
    datas: Array<any>;
}
declare const App: (props: IProps) => JSX.Element;
export default App;
