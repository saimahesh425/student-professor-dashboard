const sql = require('mssql');

const dbConfig = {
  user: 'admin',
  password: 'H1ZqiI5oaNZ0Weqb8QuL',
  server: 'database-1.ce2rpaysyfsx.us-east-1.rds.amazonaws.com', // Use your server address
  database: 'education_institute',
  options: {
    encrypt: true, // Use encryption
    trustServerCertificate: true // For local development, adjust for production
  }
};

const poolPromise = sql.connect(dbConfig)
    .then(pool => {
        if (pool.connecting) {
            console.log('Connecting to SQL Server...');
        }
        console.log('Connected to SQL Server');
        return pool;
    })
    .catch(err => {
        console.error('Database connection failed:', err);
        process.exit(1);
    });

module.exports = { sql, poolPromise, dbConfig };
