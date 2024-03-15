const express = require('express');

const app = express();

app.use(express.urlencoded({extended:true}));


// Importando o arquivo ProductManager
const productManager = require('./ProductManager');

app.get('/products', (req, res) => {
  
  // Criando uma instância do ProductManager
  const productManager = new ProductManager();

  
  const products = productManager.getAllProducts(); // Obtendo os produtos

  // Enviando a resposta
  res.send(products);
});


// Inicia o servidor na porta definida (8080)

app.listen (8080, ()=> console.log("Here comes the new chalenger!!"));
