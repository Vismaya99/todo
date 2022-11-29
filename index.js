document.getElementById('user');
document.getElementById('pwd');



function validate(callback){
   if(user.value=='admin' && pwd.value=='12345'){
    callback();
   }
   else{
    alert('error');
    return false;
   }
}
function  redirect(){

}








// const api_url = 
//       "https://jsonplaceholder.typicode.com/todos";
  
// // Defining async function
// async function getapi(url) {
    
//     // Storing response
//     const response = await fetch(url);
    
//     // Storing data in form of JSON
//     var data = await response.json();
//     console.log(data);
//     if (response) {
//         console.log(data.title);
//     }
//     show(data);
//    }