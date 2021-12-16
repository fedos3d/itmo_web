function filter (i) {
    let max = 20;
    let min = 5;
    let num = Math.floor(Math.random() * (max - min) + min);
    console.log(num);
    if ((i.id % num) === 0) {
        return i.id;
    }
}
const fetchAPI = () => {
    let loader = '<div id="preloader">\n' +
        '  <div id="loader"></div>\n' +
        '</div>';
    document.getElementById('results').innerHTML = loader;
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then((response) => response.json())
        .then(json => {
            console.log(json);
            let result = document.getElementById('results');
            result.innerHTML = '';
            json.filter(filter).forEach((item) => {

                let div = document.createElement('div');
                div.setAttribute("class", "comment");

                let h4 = document.createElement("h4");
                let name = document.createTextNode(item.name);

                let id = document.createElement("span");
                id.setAttribute("class", "comment_id");
                let comment_id = document.createTextNode(" comment_id: " + item.postId);
                id.appendChild(comment_id);

                let mailBox = document.createElement("span");
                mailBox.setAttribute("class", "mailbox");
                let mailText = document.createTextNode(" " + item.email);
                mailBox.appendChild(mailText);

                h4.appendChild(name);
                h4.appendChild(mailBox);
                h4.appendChild(id);

                div.appendChild(h4);

                let paragraph = document.createElement('p');
                let text = document.createTextNode(item.body);

                paragraph.appendChild(text);
                div.appendChild(paragraph);

                result.appendChild(div);
            });
        })
        .catch((error) => {
            console.log('error: ' + error);
            alert("bad request");
            document.getElementById('results').innerHTML = '';
        });
};
fetchAPI();