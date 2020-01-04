import React from "react";
import ReactDom from 'react-dom';
import './styles/index.scss';
import App from "./App";

const MOUNT_ELEMENT = document.getElementById('root');

ReactDom.render(<App />, MOUNT_ELEMENT);
