
module.exports = {
    ...require("./tools"),

    delayed_chunks: async (arr, chunk_size, ms, callback, debug = false) => {
        const chunks_info = module.exports.split_arr( arr, chunk_size );
        if (debug) console.log(chunks_info);
        for ( let i = 0; i < chunks_info.length; i++ ) {
            const result = await module.exports.get_next_chunk( chunks_info.arr_id, ms );
            if (debug) console.log( result) ;
            callback( result );
        }
    }
}