// Define is a super interesting. It just adds more functions to the module.
var MyModules = (function Manager() {
    var modules = {};
     
    function define(name, deps, impl) {
        for (var i = 0; i < deps.length; i++) {
            deps[i] = module[deps[i]];
        }
         
        modules[name] = impl.apply( impl, deps );
    }
     
    function get(name) {
        return modules[name];
    }
     
    return {
        define: define,
        get: get
    };
})();

// Example
MyModules.define( "foo", [], function(){
    function hello(who) {
        return "Let me introduce: " + who;
    }
    
    return {
        hello: hello
    };
} );
