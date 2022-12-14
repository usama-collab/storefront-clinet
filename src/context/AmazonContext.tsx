import React, { useContext, useState, useEffect } from "react";

// create context hook,can store values and/or children or context provider,can access to the value stored in the context regardless of component level we are on,as long as the one of its ancestor is a child of the context provider then we can get access to the values stored on the context .
// to ignore ts warning "//@ts-ignore"
//@ts-ignore
const AmazonContext = React.createContext();
// this comp will wrap out our applicationExpected 1 arguments, but got 0.ts(2554)

const amazonContextProvider: React.FC = (props: any) => {
    const [subContainer, setSubContainer] = useState(false);
    return (
    // <AmazonContext.Provider>{props.children}</AmazonContext.Provider>
    <div></div>
    );
};
export default amazonContextProvider;
