/// <reference types="react" />
interface IProps {
    text: string;
    columns: Array<{
        label: string;
        value: string;
        key: string;
    }>;
    datas: Array<any>;
}
declare const App: (props: IProps) => JSX.Element;
export default App;
