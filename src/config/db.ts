import mysql from 'mysql2/promise';

const connection = async () => {
  return await mysql.createConnection({
    host: 'voutti-db2.ch0qiwcoyjca.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'hola1234',
    database: 'voutti-db'
  }) 
} 

export default connection