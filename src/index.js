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
    password: 'n#QccEv3#c3MM*F',
    database: 'freedb_NeflixPair',
  });
  await connection.connect();

  console.log(
    `Conexión establecida con la base de datos (identificador=${connection.threadId})`
  );

  return connection;
}

//PETICIONES CON PARÁMETROS
//endpoint para todas recibir datos pelis
server.get('/movies', async (req, res) => {
  console.log(req.query);
  const genreFilterParam = req.query.genre;
  const sortParam = req.query.sort;
  console.log(genreFilterParam);
  //establecer conexión
  const connection = await getConnection();
  //crear consulta
  let query = '';
  let movies = [];
  if (genreFilterParam === '') {
    query = `SELECT * FROM movies order by title ${sortParam}`;
    // query = `SELECT * FROM movies order by title desc`;
    console.log(query);
    const [results, fields] = await connection.query(query);
    movies = results;
  } else {
    query = `SELECT * FROM movies WHERE genre = ? order by title ${sortParam}`;
    console.log(query);

    const [results, fields] = await connection.query(query, [genreFilterParam]);
    movies = results;
  }

  //responder a la petición
  res.json({
    success: true,
    movies: movies,
  });

  //terminar conexión
  connection.end();
});

//MOTOR DE PLANTILLAS
//endpoint para escuchar peticiones del detalle de una peli
server.get('/movie/:movieId', (req, res) => {
  console.log(req.params);
  const foundMovie = req.params.movieId;

});

//servidor de estáticos
const staticServerPathWeb = './src/public-react';
server.use(express.static(staticServerPathWeb));
