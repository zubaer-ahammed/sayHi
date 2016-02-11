function sayHi (selector) {
    var el = $(selector);
    return function (name) { 
        el.text("Hi " + name + "!");
    }
}