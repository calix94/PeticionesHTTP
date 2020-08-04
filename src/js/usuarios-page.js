import { obtenerUsuarios } from "./http-provider";

const body  = document.body;
let t_body;
let contador=0;
const crearHtml = () => {

    const html = `
    <h1 class="mt-5"> Usuarios</h1>
    <hr>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">email</th>
                <th scope="col">Nombre</th>
                <th scope="col">Avatar</th>
            </tr>
        </thead>
        <tbody id='idTbody'>
        </tbody>
    </table>
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.appendChild( div );
    t_body=document.querySelector('tbody');
            
}


const crearFilaUsuario = ( usuario ) => {

    const {id,email,first_name,last_name,avatar}=usuario;
    contador++;


    const html = `
        <td scope="col"> ${contador}. </td>
        <td scope="col"> ${email} </td>
        <td scope="col"> ${first_name} ${last_name} </td>
        <td scope="col">
            <img class="img-thumbnail" src="${avatar}">
        </td>
    `;

    const tr = document.createElement('tr');
    tr.innerHTML = html;


    t_body.append(tr);
    contador++;
    // Añadir el table row (tr) dentro del TBody creado anteriormente

}


export const init = async() => {

    crearHtml();

    // const listaUsuarios=obtenerUsuarios().then(;
    obtenerUsuarios().then(usuario=>{
        usuario.forEach(usuario => {
            crearFilaUsuario(usuario);
        });
    });

            


    // Obtener la lista de usuarios usando el servicio creado
    // Por cada usuario, llamar la función crearFila (for, forEach)
    // Colocar el init en el index.js, para que se ejecute la creación

}

