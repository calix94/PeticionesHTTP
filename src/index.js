// import { init }  from "./js/chistes-pages";
 import { obtenerUsuarios }  from "./js/http-provider";

// init();
obtenerUsuarios().then(console.log);
