import React from "react";
import { createRoot } from "react-dom/client";
import { main } from "./main";

const root = createRoot(document.getElementById('root'));

root.render(<h1>Hello, React! I love you.</h1>);

main();
