// ДЗ №12
// Необходимо написать обертку для fetch, с возможностью "перезапроса" в случае неудачи.
function fetchWithRetry(constructor, tries) {
    return constructor.catch((err) => {
        if (tries <= 0) {
            return Promise.reject(err);
        }

        tries--;
        return fetchWithRetry(constructor, tries);
    })
}

fetchWithRetry(fetch('https://jsonplaceholder.typicode.com/posts/1'), 3)
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.error(err));