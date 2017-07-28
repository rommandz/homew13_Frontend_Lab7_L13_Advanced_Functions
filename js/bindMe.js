Function.prototype.bindMe = function() {
    var func = this;
    var context = arguments[0];
    var args = Array.prototype.slice.call(arguments, 1); //bindMe can contain also some arguments, except "context"
    return function f() {
        var innerArgs = Array.prototype.slice.call(arguments);
        return func.apply(context, args.concat(innerArgs));
    };
};

function addPropToNumber(number) {
    return this.prop + number;
}
var bound = addPropToNumber.bindMe({
    prop: 9
});

bound(1); // 10
