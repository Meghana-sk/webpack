import App from "./App";
import Logo from "./assets/logo.svg"

const root = document.getElementById('root');

root.innerHTML = `<h1>Hello there!</h2>${App({name: "Meghana"})}<img src=${Logo} />`