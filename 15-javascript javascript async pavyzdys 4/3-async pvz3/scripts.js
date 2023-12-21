const getTodos = (resource) => {
    return new Promise((resolve, reject) => {

        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            // console.log(request);
            if (request.readyState === 4 && request.status === 200) {
                // console.log(request.responseText);
                // callback(undefined, request.responseText);
                resolve(JSON.parse(request.responseText));
            } else if (request.readyState === 4) {
                // console.log('Nepavyko gauti duomenų.');
                // callback('Nepavyko gauti duomenų.', undefined);
                reject('Nepavyko gauti duomenų.');
            }
        });
    
        // request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
        // request.open('GET', './duomenys.json');
        request.open('GET', resource);
        request.send();

    });
}

// console.log(1);

// getTodos((error, data) => {
//     if (error) {
//         console.log(error);
//     } else {
//         data = JSON.parse(data);
//         console.log(data);
//     }
// });

// console.log(2);

// function kazkas(error, data) {
//     console.log(error ? error: data);
// }

// getTodos(kazkas);


getTodos('./duomenys.json').then(data => {
    console.log('promise resolved:', data);
}).catch(error => {
    console.log('promise rejected:', error);
});
