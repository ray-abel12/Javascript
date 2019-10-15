var database = [{username:"job",password:"1234"},
                {username:"abel",password:"abel"},
                {username:"john",password:"ray"}];
var feed = [{username:"abel",timeline:"feeling tired"},
           {username:"tina",timeline:"love you dear"}];
var username = prompt("enter username");
var password = prompt("enter password");


function isUserValid(username,password){
    for(var i =0; i < database.length; i++){
        if(database[i].username===username&&
          database[i].password===password){
            return true;
          }
          
    }
    return false;
}

function login(username, password){
    if(isUserValid(username,password)){
        console.log(feed);
    }
    else{
        alert("access denied")
    }
      
    }

    // if (username === database[0].username && 
        // password === database[0].password){
    // console.log(feed);

// }else{
    // alert("error something is wrong");
// }
// }
 login(username , password);
