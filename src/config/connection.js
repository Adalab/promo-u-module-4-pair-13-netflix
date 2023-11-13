const mongoose = require('mongoose');

const dbConnect = () => {
  const user = 'Irema';
  const pass = '8FyVbcacjHIt6VUQ';
  const dbName = 'Netflix';

  const uri = `mongodb+srv://${user}:${pass}@cluster0.upwy9lv.mongodb.net/${dbName}?retryWrites=true&w=majority`;

  mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('conectado a MongoDB'))
    .catch((e) => console.log('error de conexión', e));
};
module.exports = dbConnect;
