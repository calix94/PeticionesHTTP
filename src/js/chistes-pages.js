import { obtenerChiste } from "./http-provider";

const body = document.body;
let btnOtro,olList;
let contador=1;

const crearChistesHtml = () => {

    const html = `
            <h1 class="mt-5">Chistes</h1>
            <hr>
            <button class="btn btn-primary"> Otro Chiste</button>

            <ol class="mt-2 list-group">
                <li class="list-group-item">...</li>
            </ol>
            `;

            const divChistes=document.createElement('div');
            divChistes.innerHTML=html;

            body.append(divChistes);
}

    const eventos=()=>{

        olList=document.querySelector('ol');
        btnOtro=document.querySelector('button');

        btnOtro.addEventListener('click', async()=>{



            contador=document.querySelectorAll('li').length;
            console.log(contador);
            // const chiste=obtenerChiste().then
            btnOtro.disabled=true;
            dibujarChiste(await obtenerChiste());
            btnOtro.disabled=false;


        });


    }
    //id, value
    const dibujarChiste=(chiste)=>{

        const olItem=document.createElement('li');
        olItem.innerHTML=`<b>${contador}</b> : ${chiste.value}`;
        olItem.classList.add('list-group-item');

        olList.append(olItem);
        contador++;

    }

export const init=()=>{
    crearChistesHtml();
    eventos();
}
