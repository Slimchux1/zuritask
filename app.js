const fetch = require('node-fetch');
const fs = require('fs')


fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
}).then(res => res.json())
  .then(json => {
      const main = json
      const result = JSON.stringify(main)
      console.log(result)

      fs.writeFile('./result/posts.txt', 
      `Below is my result: \n ${result}`, (err) => {
          if (err) throw error;
          console.log('File created');
      } )

  });