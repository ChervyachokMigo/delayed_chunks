const { delayed_chunks } = require('./index.js');

( async () => {
    const chunk_size = 4;
    const time_delay_ms = 1000;

    //generate numbers array
    let arr = [];
    for (let i = 0; i < 9; i ++){
        arr.push(i);
    }

    //get delayed chanks
    delayed_chunks(arr, chunk_size, time_delay_ms, ({ data, inc, length }) => {

        //do something with 'chunk', it is current chunk of data, sliced from array
        //do something with inc, it is current iterator
        //do something with length, it is count of chunks

        console.log(`getting records:`, `${inc} of ${length}`);
        console.log('data:', data);

    //debug = true
    }, true);

})();