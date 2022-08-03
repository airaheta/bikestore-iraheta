const createData = () => { 

    const promise = fetch('https://jsonplaceholder.typicode.com/posts',{ 
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId:1, 
        })
    })
   return promise

}