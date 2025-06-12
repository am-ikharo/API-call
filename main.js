


const postsListContainer = document.querySelector('.post-list-container')

// fetch using XHR

function fetchUsingXHR() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts')
    xhr.responseType = 'json';
    xhr.send();
    

    xhr.onload = () => {
        if(xhr.status === 200){
            displayResults(xhr.response)
            
        }else{
            console.log('some error occured');
            
        }
    }
}

function displayResults(posts){
    postsListContainer.innerHTML = posts.map(
        (postItem) => `
        <div class='post-item'>
        <h3>${postItem.title}</h3>
        <p>${postItem.body}</p>
        </div>
        `
    ).join(' ')
}

fetchUsingXHR();