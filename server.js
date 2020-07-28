const express = require('express');
const routes = require('./routes');

// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

//console.log(config.parsed.DB_HOST);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});


app.get('/products', (req, res) => {
  return res.send(JSON.stringify({}));
});
