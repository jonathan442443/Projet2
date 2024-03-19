document.addEventListener("DOMContentLoaded",function(){
    //Ceci me permet de supprimer la div "lightBox" d'exemple une fois que j'ai un etudiant ajoute
    if(!localStorage.length==0){
      let cardExample=document.querySelector(".lightBox");
      cardExample.remove() ;
    }
    let keys = Object.keys(localStorage);
    keys.sort();
    keys.forEach((el)=>{
        
        let cle=localStorage.getItem(el);
        let valeur=JSON.parse(cle);
        let carte=document.createElement("div");
        carte.className="lightBox"
        carte.innerHTML=`
       
    <button type="button" class="btn btn-secondary">fermer</button>
    <div class="card mb-3 card_webschool">
      <div class="row no-gutters">
        <div class="col-md-4 align-self-center">
          <img src="assets/images/WebschoolLogo-PNG300.png" class="card-img" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title mt-4 mb-0">Carte etudiant</h5>
            <p class="card-text mb-2 font-weight-bold">Formation: ${valeur.cours} </p>
            <p class="card-text mb-0 font-weight-bold">${valeur.name}</p>
            <p class="card-text m-0">ID: ${valeur.tz}</p>
            <p class="card-text"><small class="text-muted">Valable ${valeur.date}</small></p>
          </div>
        </div>
      </div>
    </div>
  
       `
       document.body.appendChild(carte)});

       let card=document.querySelectorAll(".lightBox");
       let btnInfo=document.querySelectorAll(".btn-info");
       let btnClose=document.querySelectorAll(".btn-secondary");
       let btnDelete=document.querySelectorAll(".btn-danger");

       //C'est la facon dont je me sers pour recuperer toutes lignes du tableau afin d'etre en capacite de les supprimer.
       let tr=document.querySelectorAll("tr");
       let arrTr=Array.from(tr);
       arrTr.splice(0,1)
       console.log(arrTr)


        btnInfo.forEach((element,i) => {
           element.addEventListener("click",function(){
             card[i].style.display="flex"
             
            })
           });
        btnClose.forEach((element,i) => {
            element.addEventListener("click",function(){
             card[i].style.display="none" 
            })
            
           });


           btnDelete[0].addEventListener("click",function(){
            let q=confirm("Voulez vous supprimer cet utilsateur?")
              if(q){
              arrTr[0].parentNode.removeChild(arrTr[0]);
            }
    
            })

        btnDelete.forEach((element,i) => {
          if(!i==0){
          element.addEventListener("click",function(){
            let q=confirm("Voulez vous supprimer cet utilisateur?")
            if(q){ 
            arrTr[i].parentNode.removeChild(arrTr[i]);
            i--;
            localStorage.removeItem(keys[i])
          }
          
          })}
          
        });

        

});
