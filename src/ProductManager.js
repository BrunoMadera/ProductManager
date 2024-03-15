const path = require('node:path');

console.log("~~~start~~~");

const produtos = [
        {
          id:1,
          name:"Grampeador", 
          description:"Preto Gramp0o 26/6", 
          price:300, 
          thumbnail: "https://m.media-amazon.com/images/I/41mWxdc6otL.__AC_SX300_SY300_QL70_ML2_.jpg", 
          code: "A" ,
          stock: 12,
        },
                ];

console.log("Array Inicial↓");
console.log(produtos);

class ProductManager {
  constructor(produtos) {
    // Array de produtos 
    this.produtos = produtos;

    // Atributos para auxiliar na gestão
    this.proximoId = produtos.length + 1;

    // This.Path
    this.path = this.getCurrentScriptPath();
  }

  // Current Path
  getCurrentScriptPath() {
        const path = require('path');
        const filename = path.basename('/Users/Public/ProductManagerPath.js');
  
        return filename;
  }

  

  // Adicionar um novo produto
  addProduct(name, description, price, thumbnail, code, stock) {
    
    if(name===""||description===""||price===""||thumbnail===""||code===""||stock===""){
      
    return console.log(" Cadastro FALHOU! Nao permitido campos vazios, revise e tente novamente!");
    } 
    
     
  const validProductCode = this.produtos.some(
      (produto) => produto.code === code
    );

    // console.log("Validação do Codigo↓ | True = Passou | False = Falhou");
    // console.log(!validProductCode);

    if (!validProductCode) {
       
    const novoProduto = {
      id: this.proximoId++, //incrementa auto
      name, 
      description, 
      price, 
      thumbnail, 
      code, 
      stock,
    };
    this.produtos.push(novoProduto);
    
    console.log(" Cadastro OK!");

    return novoProduto;

    }

     return console.log(" Cadastro FALHOU! - Código já está em uso!");
  }

    // Buscar produtos por ID
  getProductByID(id) {
    return this.produtos.find((produto) => produto.id === id);
  }

  //BUsca por nome
  buscarPorNome(name) {
    const filtroNome = name.toLowerCase(); // Normalize search term
    return this.produtos.filter((produto) =>
      produto.name.toLowerCase().includes(filtroNome)
    );
  }

// atualiza um produto
  updateProduct(id, updates) {
    const produtoEncontrado = this.getProductByID(id);
    if (!produtoEncontrado) return null;

    // Aplicar Atualizacao
    Object.assign(produtoEncontrado, updates);
    return produtoEncontrado;
  }

  // Removendo um produto
  deleteProduct(id) {
    const indiceProduto = this.produtos.findIndex((produto) => produto.id === id);
    if (indiceProduto === -1) return null;

    this.produtos.splice(indiceProduto, 1);
    return true;
  }

}

// testando

const gerenteProdutos = new ProductManager(produtos);

// Adicionar um novo produto
console.log("~~~~~~~~~~");
gerenteProdutos.addProduct(
                          "Cartolina", 
                          "40x40 Branca", 
                          15, 
                          "https://tfcsir.vteximg.com.br/arquivos/ids/161921/97.jpg?v=637775963485500000", 
                          "B", 
                          101,
                          );

console.log("~~~~~~~~~~");
console.log("Array Atualizado↓"); // funciona como getProducts do desafio!
console.log(produtos);



// Buscar produtos por id
console.log("~~~~~~~~~~");
const idSearched = 3;

console.log("Id Escolhido para Busca↓");
console.log(idSearched);

const produtosEncontrados = gerenteProdutos.getProductByID(idSearched);

if(produtosEncontrados === undefined){

  console.log("Produto " + idSearched + " não Encontrado :(");
}
  else{

console.log(produtosEncontrados);

  }

console.log("Path↓");

      console.log(ProductManager.filename);
console.log("~~~~~~~~~~");

console.log("Busca Por Nome↓");
const produtosEncontradosNome = gerenteProdutos.buscarPorNome("grampeador");
console.log(produtosEncontradosNome);

console.log("~~~~~~~~~~");

console.log("Editando um Produto↓");
gerenteProdutos.updateProduct(2, 
          { name: "Lápis", 
          description: " Lapis Preto Triangular", 
          price: 15,
          thumbnail:"https://img.freepik.com/vetores-gratis/design-do-lapis-da-escrita_1095-187.jpg?w=740&t=st=1709855347~exp=1709855947~hmac=ad8472fb6fed134f3bbb4f2f904669067705e743de9ced229604a9c0aee2e651" ,
          code: "C",
          stock:"25",
          });

console.log("~~~~~~~~~~");
console.log("Array Atualizado↓"); // funciona como getProducts do desafio!
console.log(produtos);

console.log("~~~~~~~~~~");

gerenteProdutos.deleteProduct(1);
console.log("Array Atualizado↓"); // funciona como getProducts do desafio!
console.log(produtos);

console.log("~~~end~~~");
