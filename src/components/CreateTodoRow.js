import { iconElementRender } from "../helpers/icons.js";
import { addTdButton, addButtonsContainer } from "../helpers/renderButton.js";
import { getId } from "../helpers/storingData.js";

export function addTodoRow(obj) {
    const idRow = getId(obj);

    const tr = document.createElement("tr");
    tr.classList.add("rounded-3xl", "bg-white/50");
    tr.setAttribute("id", idRow);
    
    const iconElement = iconElementRender(obj.category);
    addTd(iconElement, tr);

    const { isArchived, id, contents, ...renderedProperties } = obj;

    Object.values(renderedProperties).forEach((value) => {
        const td = document.createElement('td');
        td.classList.add("text-left");
        td.textContent = value;
        tr.appendChild(td);
    });

    const contentsTd = document.createElement('td');
    contentsTd.classList.add("text-left");
    contentsTd.textContent = contents;
    tr.appendChild(contentsTd);

    const dateTd = document.createElement('td');
    dateTd.classList.add("text-left");
    dateTd.textContent = getDate(contents);
    tr.appendChild(dateTd);

    const buttonsCont = addButtonsContainer(obj);

    addTdButton(buttonsCont, tr);
    
    const tbody = document.getElementById("tbody");

    tbody.appendChild(tr);
}

function addTd(value, tr) {
    const td = document.createElement('td');
    td.classList.add("pl-6", "text-left");
    td.append(value);
    tr.appendChild(td);
}

function getDate(d) {
    let day, month, year, result, dateSplitted;

    result = d.match("[0-9]{2}([\-/ \.])[0-9]{2}[\-/ \.][0-9]{4}");
    if (null != result) {
        dateSplitted = result[0].split(result[1]);
        day = dateSplitted[0];
        month = dateSplitted[1];
        year = dateSplitted[2];
    } else {
        result = d.match("[0-9]{4}([\-/ \.])[0-9]{2}[\-/ \.][0-9]{2}");
        if (null != result) {
            dateSplitted = result[0].split(result[1]);
            day = dateSplitted[2];
            month = dateSplitted[1];
            year = dateSplitted[0];
        }
    }

    if (month > 12) {
        let aux = day;
        day = month;
        month = aux;
    }

    return year && month && day ? day + "/" + month + "/" + year : "";
}
