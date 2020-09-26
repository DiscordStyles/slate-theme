import HMR from "@sveltech/routify/hmr";
import App from "./App.svelte";
import "../scss/app.scss";

const app = HMR(App, { target: document.body }, "app");

export default app;
