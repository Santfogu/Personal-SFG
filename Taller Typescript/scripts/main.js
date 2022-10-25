import { series } from "./data.js";
var serieTable = document.getElementById("serie");
var estadisticasTable = document.getElementById("estadisticas");
var serieCard = document.getElementById("cardSerie");
mostrarDatosSeries(series);
mostrarEstadisticas(series);
mostrarInfoSerie(series[0]);
function mostrarDatosSeries(series) {
    var tbodySerie = document.createElement("tbody");
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serieAct = series_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serieAct.id, "</td>\n                                <td>").concat(serieAct.name, "</td>\n                                <td>").concat(serieAct.channel, "</td>\n                                <td>").concat(serieAct.seasons, "</td>");
        tbodySerie.appendChild(trElement);
    }
    serieTable.appendChild(tbodySerie);
}
function mostrarEstadisticas(series) {
    var promedio = 0;
    for (var index = 0; index < series.length; index++) {
        var serieAct = series[index];
        promedio += serieAct.seasons;
    }
    promedio = promedio / series.length;
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td><b>Promedio temporadas: </b></td><td>".concat(promedio, "</td>");
    estadisticasTable.appendChild(trElement);
}
function mostrarInfoSerie(serie) {
    var content = "<img class=\"card-img-top\" src=\"".concat(serie.image, "\">\n                    <div class=\"card-body\">\n                    <p class=\"card-text\">").concat(serie.descripcion, "\n").concat(serie.web, "</p>\n                    </div>");
    serieCard.innerHTML = content;
}
