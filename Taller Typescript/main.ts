import {Serie} from "./serie.js";
import {series} from "./data.js"

let serieTable: HTMLElement = document.getElementById("serie")!;
let estadisticasTable: HTMLElement = document.getElementById("estadisticas")!;
let serieCard: HTMLElement = document.getElementById("cardSerie")!;

mostrarDatosSeries(series)
mostrarEstadisticas(series)
mostrarInfoSerie(series[0])

function mostrarDatosSeries(series: Array<Serie>):void
{
    let tbodySerie = document.createElement("tbody");
    for(let serieAct of series)
    {
        let trElement: HTMLElement = document.createElement("tr");
        trElement.innerHTML = `<td>${serieAct.id}</td>
                                <td>${serieAct.name}</td>
                                <td>${serieAct.channel}</td>
                                <td>${serieAct.seasons}</td>`;
        tbodySerie.appendChild(trElement);
    }
    serieTable.appendChild(tbodySerie);
}


function mostrarEstadisticas(series: Array<Serie>):void
{
    let promedio: number = 0;
    for(let index = 0; index < series.length; index++)
    {
        let serieAct: Serie = series[index];
        promedio += serieAct.seasons;
    }
    promedio = promedio/series.length;
    let trElement: HTMLElement = document.createElement("tr");
    trElement.innerHTML = `<td><b>Promedio temporadas: </b></td><td>${promedio}</td>`;
    estadisticasTable.appendChild(trElement);
}


function mostrarInfoSerie(serie: Serie):void
{
    let content =   `<img class="card-img-top" src="${serie.image}">
                    <div class="card-body">
                    <p class="card-text">${serie.descripcion}\n${serie.web}</p>
                    </div>`
    serieCard.innerHTML = content;
}