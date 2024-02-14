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

        chunks_list.push({
            id: arr_id, 
            chunks,
            inc: 0
        });

        return { 
            id: arr_id, 
            length: chunks.length 
        };
    },

    get_next_chunk: async (arr_id, ms) => {
        if (chunks_list.findIndex( v => v.id === arr_id) === -1)
            return null;

        if (chunks_list[arr_id].inc > chunks_list[arr_id].chunks.length - 1)
            return null;

        return new Promise( (res) => {
            setTimeout( ()=> {
                res({ chunk: chunks_list[arr_id].chunks[ chunks_list[arr_id].inc ] });
                chunks_list[arr_id].inc = chunks_list[arr_id].inc + 1;
            }, ms);
        });
    }
}
