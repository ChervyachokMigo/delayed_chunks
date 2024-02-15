# Install

in your project `npm install ChervyachokMigo/delayed_chunks`

# Use Sample 1
```
const { delayed_chunks } = require('ChervyachokMigo/delayed_chunks');

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
```

# Use Sample 2
```
const { split_arr, get_next_chunk } = require('ChervyachokMigo/delayed_chunks');

( async () => {
    const chunk_size = 4;
    const time_delay_ms = 1000;

    //generate numbers array
    let arr = [];
    for (let i = 0; i < 9; i ++){
        arr.push(i);
    }

    //get delayed chanks
    const chunks = split_arr(arr, chunk_size);
    console.log(`split ${arr.length} records into ${chunks.length} chunks delayed ${time_delay_ms} ms`);

    for (let i = 0; i < chunks.length; i ++ ) {
        const chunk = await get_next_chunk(chunks.arr_id, time_delay_ms);
        if (!chunk) break;
        console.log(`getting records:`, `${chunk.inc} of ${chunk.length}`);
        console.log('data:', chunk.data);
    }

})();
``` 
# Use Sample 3
```
const { split_arr, get_next_chunk, set_inc } = require('ChervyachokMigo/delayed_chunks');

const delayed_function = async (continue_page = 0) => {
    const chunk_size = 4;
    const time_delay_ms = 1000;

    //generate numbers array
    // [1,2,3,4,5...20]
    let arr = [];
    const generate_max_value = 20;
    for (let i = 0; i < generate_max_value; i ++){
        arr.push(i);
    }

    const chunks = split_arr(arr, chunk_size);

    //continue from 'continue_page' chunk num
    set_inc(chunks.arr_id, continue_page);
    console.log(chunks)
    console.log('continue from chunk id =', continue_page);
    /*eslint no-unused-vars: ["error", { "varsIgnorePattern": "[k]" }]*/
    for (let k in chunks.data){
        const chunk = await get_next_chunk( chunks.arr_id, time_delay_ms );
        if (!chunk) break;
        console.log(`getting records:`, `${chunk.inc} of ${chunk.length}`);
        console.log('data:', chunk.data);
    }
}

( async () => {
    //execute from page 3
    await delayed_function(3);
})();
```