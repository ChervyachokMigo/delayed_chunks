const { split_arr, get_next_chunk } = require("./tools");

module.exports = {
    split_arr,
    get_next_chunk,

    delayed_chunk: async (arr, chunk_size, ms, callback, debug = false) => {
        const chunks_info = split_arr( arr, chunk_size );
        if (debug) console.log(chunks_info);
        for ( let i = 0; i < chunks_info.length; i++ ) {
            const result = await get_next_chunk( chunks_info.id, ms );
            if (debug) console.log(result);
            callback( result );
        }
    }
}