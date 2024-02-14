# Install

in your project `npm install ChervyachokMigo/delayed_chunks`

# Use
```
const delayed_chunks = require('ChervyachokMigo/delayed_chunks');

( async () => {

    //generate numbers array
    let arr = [];
    for (let i = 0; i < 8; i ++){
        arr.push(i);
    }

    //get delayed chanks
    delayed_chunks(arr, 7, 1000, ({ chunk, inc, length }) => {

        //do something with 'chunk', it is current chunk of data, sliced from array
        //do something with inc, it is current iterator
        //do something with length, it is count of chunks

    }, true);

})();
```
