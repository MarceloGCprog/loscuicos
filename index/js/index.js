var listaDepartamentos =[
    {
    "nome": "Bandanas","qtd_produtos":10,"imagem":"bandana.jpg"},
    {
    "nome": "Gravatas","qtd_produtos":10,"imagem":"gravata.jpg"},
    {
    "nome": "Coleiras","qtd_produtos":10,"imagem":"coleira.jpg"},
];
var listaProdutos=[
    { "index":0,    
    "nome_vitrine": "Vitrine1",
    "imagem": "bunny2.jpg",
    "descricao": "Produto",
    "status": false},
    { "index":1,    
    "nome_vitrine": "Vitrine1",
    "imagem": "bunny2.jpg",
    "descricao": "Produto",
    "status": false},
    { "index":2,    
    "nome_vitrine": "Vitrine1",
    "imagem": "bunny2.jpg",
    "descricao": "Produto",
    "status": false},
    { "index":3,    
    "nome_vitrine": "Vitrine1",
    "imagem": "bunny2.jpg",
    "descricao": "Produto",
    "status": false},
    { "index":4,    
    "nome_vitrine": "Vitrine1",
    "imagem": "bunny2.jpg",
    "descricao": "Produto",
    "status": false},
    { "index":5,    
    "nome_vitrine": "Vitrine1",
    "imagem": "bunny2.jpg",
    "descricao": "Produto",
    "status": false}
    ];

 function criarDepartamentos(){
     //debugger;
     listaDepartamentos.forEach((depart) => {
         var content = "";
        content += '<div class="departamento">';
        content += `<div class="nome-vitrine"> ${depart.nome}</div>`;
        content += '<div class="vitrine">';

        content += criarVitrine(depart.imagem);
        content +='</div></div>';
        document.getElementById('main').innerHTML+=content;
        //console.log(content);
        })};

            
function criarVitrine(imagem){
    //debugger;
    var conteudo = "";
    listaProdutos.forEach(produto => {
        
               
        conteudo +='<div class="poster" >';
        conteudo +='<div class="poster-img">';
        conteudo +=`<img src="index/img/produtos/${imagem}"/>`;
        conteudo +=`</div><div class = "poster-descrip"> ${produto.descricao} </div>`;
        conteudo +='<div class = "poster-cart"> Add ao carrinho </div>';
        conteudo +='</div>'});
        
       return(conteudo);
        
    
}

criarDepartamentos();

            