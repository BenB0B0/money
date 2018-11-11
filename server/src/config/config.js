module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'money',
    user: process.env.DB_USER || 'money',
    password: process.env.DB_PASS || 'money',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './money.sqlite'
    }
  }
}
