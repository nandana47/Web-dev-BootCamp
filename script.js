function validation(){

   let x=document.getElementById("name-input").value;
   let y=document.getElementById("email-input").value;
   let z=document.getElementById("msg-input").value;


   if(x == "")
   {
      document.getElementById("name-validation").style.display="block";
   }

   if(y == "")
   {
      document.getElementById("email-validation").style.display="block";
   }

   if(z == "")
   {
      document.getElementById("msg-validation").style.display="block";
   }


   if ((x || y || z)== "")
      return false;

}