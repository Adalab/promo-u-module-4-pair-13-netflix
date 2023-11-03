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
    password: 'n#QccEv3#c3MM*F', //3e7xcC4*uxS7p7d
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
  const genreFilterParam = req.query.genre;
  const sortParam = req.query.sort;
  console.log(genreFilterParam);
  //establecer conexión
  const connection = await getConnection();
  //crear consulta
  let query = '';
  if (genreFilterParam === '') {
    query = `SELECT * FROM movies order by title ${sortParam}`;
  } else {
    query = `SELECT * FROM movies WHERE genre = "${genreFilterParam}" order by title ${sortParam}`;
  }

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
