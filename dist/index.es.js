import React from 'react';

const HelloWorld = (props) => {
    const { text } = props;
    return React.createElement("div", null,
        "Hello world ",
        text);
};

export default HelloWorld;
export { HelloWorld };
//# sourceMappingURL=index.es.js.map
