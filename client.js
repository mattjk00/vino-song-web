$(document).ready(function() {
    get_chord_progression();
});

async function get_chord_progression() {
    const response = await fetch('http://localhost:3200/');
    const data = await response.json(); //extract JSON from the http response
    console.log(data);

    let chord_row = $("#chord_row");
    chord_row.html("");
    for (let i = 0; i < data.length; i++) {
        let chord = data[i].value;
        chord_row.append("<td><h1>" + chord + "</h1></td>");
    }
}