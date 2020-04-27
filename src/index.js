import React from 'react';
import ReactDOM from 'react-dom';
import KandyKorner from './components/KandyKorner';
import Auth from "./components/auth/Auth"



    ReactDOM.render(localStorage.getItem("kandy__customer") ? <KandyKorner /> : <Auth />, document.getElementById("root"))

