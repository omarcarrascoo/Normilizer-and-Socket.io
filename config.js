const option = {
    mysql:{
        client: 'mysql',
        connection: {
            host:'127.0.0.1',
            user:'root',
            psw: '',
            database:'test'
        }
    },
    sqlite:{
        client:'sqlite3',
        connection: {
            filename:'./mydb.sqlite'
        },
        useNullAsDefault: 'null'
    }
    
}

module.exports = {option}