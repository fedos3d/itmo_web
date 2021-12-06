function filter (i) {
    let num = 5
    if ((num % 2) == 0) {
        return i.id <= 5
    } else {
        return i.id >= 5
    }
}
const fetchAPI = () => {
    // var temp = document.getElementsByTagName("template")[0];
    // var clon = temp.content.cloneNode(true);
    let loader = '<div id="preloader">\n' +
        '  <div id="loader"></div>\n' +
        '</div>'
    document.getElementById('results').innerHTML = loader;
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then(json => {
            console.log(json);
            document.getElementById('results').innerHTML = json
        })
        .catch((error) => {
            console.log('error: ' + error);
            alert("bad request");
            document.getElementById('results').innerHTML = '';
        });
};
fetchAPI()