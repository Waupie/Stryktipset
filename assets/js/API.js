const API_ADRESS = "https://stryk.herokuapp.com/tipset";

export const fetchTableData = function() {
    const myResponse = fetch(API_ADRESS)
        .then(result => result.json())
        .then(data => {
            return data;
        })
    return myResponse;
}
    