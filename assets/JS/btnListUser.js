document.addEventListener("DOMContentLoaded",function(){

  let getKeys=_=>{
    let keys = Object.keys(localStorage);
    keys.sort();
    return keys
  }

  let keys=getKeys()
   

  function sendForm(){
    let tab=document.getElementById("usersTable");
    if(!localStorage.length==0){
      tab.innerHTML="";
    }  
    
    keys.forEach((key,i)=>{
      let cle=localStorage.getItem(key);
      let valeur=JSON.parse(cle);
      let arr=`
      <tr>
      <th scope="row">${valeur.id} </th>
      <td>${valeur.cours} </td>
      <td>${valeur.name}</td>
      <td>${valeur.tz}</td>
      <td>${valeur.date}</td>
      <td><button type="button" class="btn btn-info"> Creation de carte</button></td>
      <td><button type="button" class="btn btn-danger">X</button></td>
    </tr>`;
    tab.innerHTML+=arr;
    
    
    })
    
    };
    sendForm()


   
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
       let tr=document.querySelectorAll("tr");
       let arrTr=Array.from(tr);
       arrTr.splice(0,1)
       


        btnInfo.forEach((element,i) => {
           element.addEventListener("click",function(){
            if(localStorage.length==0){
           card[i].style.display="flex"
            }
            else{ 
              i++
              card[i].style.display="flex"
              console.log(i); }
          
            })
           });
        btnClose.forEach((element,i) => {
            element.addEventListener("click",function(){
             card[i].style.display="none" 
            })
            
           });
          

        btnDelete.forEach((element,i) => {
          if(localStorage.length==0){
            element.addEventListener("click",function(){
              let q=confirm("Voulez vous supprimer cet utilisateur?")
              if(q){ 
              arrTr[i].parentNode.removeChild(arrTr[i]);
            }
            
            })
          }
          else{
          element.addEventListener("click",function(){
            let q=confirm("Voulez vous supprimer cet utilisateur?")
            if(q){ 
            arrTr[i].parentNode.removeChild(arrTr[i]);
            localStorage.removeItem(keys[i])
          }
          
          })
        }
          
        });

        

});
