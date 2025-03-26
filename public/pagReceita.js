document.addEventListener("DOMContentLoaded", function () {
    const pathParts = window.location.pathname.split("/").filter(Boolean)
    const tipo = pathParts[0] //pra ver se é bolo ou torta
    const slug = pathParts[1] // ai é o nome da receita
  
    fetch('../data.json')
      .then(response => response.json())
    .then(data => {
        const receita = data.find(item => item.tipo == tipo && item.slug == slug) // se so tiver 1 na rota ai evita de mandar pra pagina errada
        
        if ( receita ){
          document.title +=  " " +receita.nomeReceita
         document.getElementById('receita-img').src = receita.img
          document.getElementById('ingredientes').innerText = receita.ingredientes //não tem como fazer sem id por ter 2 tag "p"
        document.getElementById('preparo').innerText = receita.preparo
        } })
      .catch(error => console.error(error));
  })
  