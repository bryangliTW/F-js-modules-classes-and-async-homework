export const getPoetry = () => {
    return fetch('https://v1.jinrishici.com/all.json').
        then(response => response.json()).
        then(data => [data.origin, data.author, data.content]);
}