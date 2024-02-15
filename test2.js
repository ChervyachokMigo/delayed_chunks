const { split_arr, get_next_chunk } = require('./index.js');

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