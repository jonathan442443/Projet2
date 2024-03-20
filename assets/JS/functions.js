document.addEventListener('DOMContentLoaded', function(){
  if(window.location.pathname==="/Projet2/addUser.html"){

    let btn=document.getElementById("sendForm");

    let getKeys=_=>{
      let keys = Object.keys(localStorage);
      keys.sort();
      return keys
    }

    let keys=getKeys()

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

    if(localStorage.length==0){
          
      obj.id=1;
      localStorage.setItem("student"+1,JSON.stringify(obj))
    }
    else{
      if(localStorage.length==1){
    
      let cle=localStorage.getItem(keys[0]) 
      let valeur=JSON.parse(cle)
      let id=valeur.id
      id++
      obj.id=id;
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
        localStorage.setItem("student"+id,JSON.stringify(obj))
    
      }
      
      })
    }}


    alert("La sauvegarde a bien été effectuée!");
    window.location.pathname="/Projet2/listUser.html"; 
    }



    btn.addEventListener("click",getForm) 
  }
});








