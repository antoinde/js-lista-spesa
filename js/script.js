// inizializzo la mia lista
const list=["Pane", "Nutella", "Biscotti", "Gelati", "Caramelle", "Pollo", "Riso", "Gallette", "Frutta", "Verdura", "Frutta secca" ];

//stampo la mia lista in console e il numero di elementi
console.log("La mia lista della spesa contiene "+list.length+" elementi! Gnam! =)");
console.log(`ELEMENTI DELL'ARRAY:`);
console.log(list);


//ciclo WHILE
let count=0;
while(count<list.length) //finche' ci sono elementi
{
    //HO SCRITTO ENTRAMBI I METODI, commentali e decommentali alternativamente
    //inserimento li (METODO 1) - innerHTML

    /* 
    let ol = document.getElementById('ordered-list')
    const element = `<li> ${list[count]} </li>`;
    ol.innerHTML += element;
    */

    //inserimento li (METODO 2) - CreateElement, append
    let ol = document.getElementById('ordered-list');
    const li = document.createElement('li');
    li.append(`${list[count]}`);

    ol.append(li);


    //incremento
    count++;
}
