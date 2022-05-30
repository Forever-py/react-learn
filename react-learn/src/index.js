import React from "react";
import ReactDOM from "react-dom/client";
import Comp from "./componenets/Comp";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <div>
        {/* <Comp children={<h1>aaa</h1>} /> */}
        {/* <Comp><h1>aaaa</h1></Comp> */}
        <Comp></Comp>
    </div>
);
