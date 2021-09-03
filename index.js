console.log ("Hello, World!")

const options = {
    headers: {
        Authorization: '0dc0d8bf7bcd4ecca326d964568a1608'
    }
}

fetch(' https://newsapi.org/v2/everything?q=cat&language=en&pageSize=5&page=2', options)
    .then(response => response.json())
    .then(console.log)
    .catch(error => console.log(error))