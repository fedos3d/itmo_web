const movieApiMovies = () => {
    // var temp = document.getElementsByTagName("template")[0];
    // var clon = temp.content.cloneNode(true);
    let loader = '<div id="preloader">\n' +
        '  <div id="loader"></div>\n' +
        '</div>'
    document.getElementById('results').innerHTML = loader;
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            if(!response.ok) throw new Error(response.status);
            else return response.json();
        })
        .then(json => console.log(json) (
            document.getElementById('results').innerHTML = json))
        .catch((error) => {
        console.log('error: ' + error);
    });
};
movieApiMovies()