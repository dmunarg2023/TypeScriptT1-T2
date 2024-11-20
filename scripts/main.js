"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./data");
var renderSeries = function () {
    var tableBody = document.getElementById('series-table');
    tableBody.innerHTML = '';
    data_1.series.forEach(function (serie) {
        var row = document.createElement('tr');
        var idCell = document.createElement('td');
        idCell.textContent = serie.id.toString();
        row.appendChild(idCell);
        var nameCell = document.createElement('td');
        nameCell.textContent = serie.name;
        row.appendChild(nameCell);
        var channelCell = document.createElement('td');
        channelCell.textContent = serie.channel;
        row.appendChild(channelCell);
        var seasonsCell = document.createElement('td');
        seasonsCell.textContent = serie.seasons.toString();
        row.appendChild(seasonsCell);
        tableBody.appendChild(row);
    });
};
renderSeries();
