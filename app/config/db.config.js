module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "mezghenaPass",
    DB: "testdb",
    dialect: "mysql",
    pool : {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000 // If no connections are in use, keep a connection to the database open for this long (ms)
    }
};