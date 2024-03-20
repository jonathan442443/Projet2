

    let btn=document.getElementById("sendForm");
    //Fonction permettant de recuperer les cles du loalstorage dans un tableau
    let getKeys=_=>{
      let keys = Object.keys(localStorage);
      keys.sort();
      return keys
    }

    let keys=getKeys()
    //Fonction permettant d'ajouter un nouvel objet dans le local storage avec les donnes d'utilsateur ajoute
    function getForm(){
      let name=document.getElementById("student_name").value;
      let cours=document.getElementById("student_cours").value;
      let tz=document.getElementById("student_tz").value;
      let date=document.getElementById("student_date").value;
      let obj={
        name:name,
        cours:cours,
        tz:tz,
        date:date
      }
    //A ce niveau je fais en sorte d'etre sur de ne pas nommer de la meme facon 2 utilisateur (ce qui ecraserait le premier) 
    //ainsi que leur donner un id qui soit forcement superieur au dernier ajoute    
    if(localStorage.length==0){
          
      obj.id=0;
      localStorage.setItem("student"+1,JSON.stringify(obj))
    }
    else{
      if(localStorage.length==1){
    
      let cle=localStorage.getItem(keys[0]) 
      let valeur=JSON.parse(cle)
      let id=valeur.id
      id++
      obj.id=id;
      id++
      localStorage.setItem("student"+id,JSON.stringify(obj))

    }
    else{
      keys.forEach((key,i)=>{
      if(i==keys.length-1){
        let cle=localStorage.getItem(key);
        let valeur=JSON.parse(cle);
        let id=valeur.id;
        id++
        obj.id=id;
        id++
        localStorage.setItem("student"+id,JSON.stringify(obj))
    
      }
      
      })
    }}


    alert("La sauvegarde a bien été effectuée!");
    window.location.pathname="/Projet2/listUser.html"; 
    }


document.addEventListener('DOMContentLoaded', function(){
  if(window.location.pathname==="/Projet2/addUser.html"){
    btn.addEventListener("click",getForm) 
  }
});








