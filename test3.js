const { split_arr, get_next_chunk, set_inc } = require('./index.js');

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