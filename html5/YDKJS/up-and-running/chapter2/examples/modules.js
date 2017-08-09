// So functions can have internal functions that return functions.

function User(){
    var username, password;
    
    function doLogin(user, pass) {
        username = user;
        password = pass;
        
        // do the rest of the login work
    }
    
    var publicAPI = {
        login: doLogin
    };
    
    return publicAPI;
}

// create a 'User' module instance

var fred = User();

fred.login("fred", "Your father smelled of elderberries" );

// Something, something, closure allow you to access the variables
// later.

// But not in the obvious way.
fred.username;
// => undefined
fred.user;
// => undefined

// Yeah, I don't get it.