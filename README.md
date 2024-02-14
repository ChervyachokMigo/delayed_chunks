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
    delayed_chunks(arr, 7, 1000, ( chunk ) => {

        //do something with 'chunk'

    }, true);

})();
```
