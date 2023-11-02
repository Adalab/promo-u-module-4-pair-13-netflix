const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

// create and config server
const server = express();
server.use(cors());
server.use(express.json());

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

//INIT CONNECTION TO DB
async function getConnection() {
  const connection = await mysql.createConnection({
    host: 'sql.freedb.tech',
    user: 'freedb_IreMa',
    password: '3e7xcC4*uxS7p7d',
    database: 'freedb_NeflixPair',
  });
  await connection.connect();

  console.log(
    `Conexión establecida con la base de datos (identificador=${connection.threadId})`
  );

  return connection;
}

//endpoint para todas recibir datos pelis
server.get('/movies', async (req, res) => {
  //establecer conexión
  const connection = await getConnection();
  //crear consulta
  let query = 'SELECT * FROM movies';
  const [results, fields] = await connection.query(query);

  //responder a la petición
  res.json({
    success: true,
    movies: results,
  });

  //terminar conexión
  connection.end();
});

//servidor de estáticos
const staticServerPathWeb = './src/public-react';
server.use(express.static(staticServerPathWeb));
