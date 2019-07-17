export const valiadateFields = (options, fields=[]) => {
    for(let i = 0; i< fields.length; i++) {
        if(!options[field[i]]) throw new Error(`${field[i]} Is Missing`)
    }
    return undefined;
}