import { fetchTableData } from './API.js';

const MATCH_RESULTS = document.querySelector('#table');

fetchTableData().then(function(data) {

    for (let index = 0; index < data.length; index++) {
        MATCH_RESULTS.innerHTML += getTableHTML(data[index].gameNumber, data[index].teams, data[index].outcome);

    }
    
});


function getTableHTML(rad, lag, resultat) {

    if (resultat == 1) {
        return (`
            <tr>
                <td>${rad}</td>
                <td>${lag}</td>
                <td>
                    <span class="checkmark">
			            <div class="stem"></div>
			            <div class="kick"></div>
		            </span> 
                </td>
                <td></td>
                <td></td>
            </tr>
        `);
    }

    if (resultat == "X") {
        return (`
            <tr>
                <td>${rad}</td>
                <td>${lag}</td>
                <td></td>
                <td>
                    <span class="checkmark">
			            <div class="stem"></div>
			            <div class="kick"></div>
		            </span> 
                </td>
                <td></td>
            </tr>
        `);
    }

    if (resultat == 2) {
        return (`
            <tr>
                <td>${rad}</td>
                <td>${lag}</td>
                <td></td>
                <td></td>
                <td>
                    <span class="checkmark">
                        <div class="stem"></div>
                        <div class="kick"></div>
                    </span> 
                </td>
            </tr>
        `);
    }

}