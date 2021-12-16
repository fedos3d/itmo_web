function filter (i) {
    let max = 20
    let min = 5
    let num = Math.floor(Math.random() * (max - min) + min);
    console.log(num)
    if ((i.id % num) === 0) {
        return i.id
    }
}
const fetchAPI = () => {
    let loader = '<div id="preloader">\n' +
        '  <div id="loader"></div>\n' +
        '</div>'
    document.getElementById('results').innerHTML = loader;
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then((response) => response.json())
        .then(json => {
            console.log(json);
            let result = document.getElementById('results');
            result.innerHTML = '';
            json.filter(filter).forEach((item) => {
                let paragraph = document.createElement('p');
                let text = document.createTextNode("comment_id: " + item.id +", " + item.body);
                paragraph.appendChild(text);
                result.appendChild(paragraph);
            });
        })
        .catch((error) => {
            console.log('error: ' + error);
            alert("bad request");
            document.getElementById('results').innerHTML = '';
        });
};
fetchAPI()