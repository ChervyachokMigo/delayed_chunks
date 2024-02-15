const chunk = require('lodash.chunk');

let chunks_list = [];
let id_inc = 0;

const generate_id = () => {
    return id_inc++;
}

module.exports = {
    split_arr: (arr, chunk_size) => {
        const arr_id = generate_id();
        const data = chunk(arr, chunk_size);
        const new_chunks = { 
            arr_id,
            data,
            length: data.length,
            inc: 0
        };
        chunks_list.push(new_chunks);
        return new_chunks;
    },

    get_chunks: (arr_id) => chunks_list[arr_id].data,

    set_inc: (arr_id, new_inc) => chunks_list[arr_id].inc = new_inc,

    get_next_chunk: async (arr_id, ms) => {
        if (chunks_list.findIndex( v => v.arr_id === arr_id) === -1)
            return null;

        if (chunks_list[arr_id].inc > chunks_list[arr_id].data.length - 1)
            return null;

        return new Promise( (res) => {
            setTimeout( ()=> {
                res({
                    arr_id,
                    data: chunks_list[arr_id].data[ chunks_list[arr_id].inc ],
                    length: chunks_list[arr_id].data.length,
                    inc: chunks_list[arr_id].inc,
                });
                chunks_list[arr_id].inc = chunks_list[arr_id].inc + 1;
            }, ms);
        });
    }
}
