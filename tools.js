const chunk = require('lodash.chunk');

let chunks_list = [];
let id_inc = 0;

const generate_id = () => {
    return id_inc++;
}

module.exports = {
    split_arr: (arr, chunk_size) => {
        const arr_id = generate_id();
        const chunks = chunk(arr, chunk_size);
        const new_chunks = { 
            id: arr_id,
            chunks,
            length: chunks.length,
            inc: 0
        };
        chunks_list.push(new_chunks);
        return new_chunks;
    },

    get_chunks: (arr_id) => chunks_list[arr_id].chunks,

    get_next_chunk: async (arr_id, ms) => {
        if (chunks_list.findIndex( v => v.id === arr_id) === -1)
            return null;

        if (chunks_list[arr_id].inc > chunks_list[arr_id].chunks.length - 1)
            return null;

        return new Promise( (res) => {
            setTimeout( ()=> {
                res({
                    arr_id: arr_id,
                    chunk: chunks_list[arr_id].chunks[ chunks_list[arr_id].inc ],
                    length: chunks_list[arr_id].chunks.length,
                    inc: chunks_list[arr_id].inc,
                });
                chunks_list[arr_id].inc = chunks_list[arr_id].inc + 1;
            }, ms);
        });
    }
}
