


const postsListContainer = document.querySelector('.poss-list-container')

// fetch using XHR

function fetchUsingXHR(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    xhr.responseType = 'json';
    xhr.send();

    xhr.onload = () => {
        if(xhr.status === 200 ){
            console.log(xhr);
            
        }
    } 
}

fetchUsingXHR()