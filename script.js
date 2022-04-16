const getUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users").then(data => {
        data.json().then(users => {
            const tbody = document.getElementById("tbody");
            tbody.innerHTML = "";
            users.forEach(data => {
                const {
                    id,
                    name,
                    username,
                    website
                } = data;

                const tr = document.createElement("tr");

                const td1 = document.createElement("td")
                td1.innerText = name;
                td1.onclick = () => rowClicked(id);
                const td2 = document.createElement("td")
                td2.innerText = username;
                const td3 = document.createElement("td")
                td3.innerText = website;

                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);

                tbody.appendChild(tr);
            })
           
        }).catch(err => console.log(err));
    }).catch(err => console.log(err));
}

const rowClicked = id => {
    getUserPosts(id);
}

const getUserPosts = id => {
    fetch("https://jsonplaceholder.typicode.com/posts").then(data => {
        data.json().then(post => {
            const userPosts = post.filter(data => data.userId === id);
            const postbody = document.getElementById("postbody");
            postbody.innerHTML = "";
            userPosts.forEach(data => {
                const {
                    title,
                    body
                } = data;

                const tr = document.createElement("tr");

                const td1 = document.createElement("td")
                td1.innerText = title;
                const td2 = document.createElement("td")
                td2.innerText = body;

                tr.appendChild(td1);
                tr.appendChild(td2);

                postbody.appendChild(tr);
            })
        }).catch(err => console.log(err));
    }).catch(err => console.log(err));
}

getUser();