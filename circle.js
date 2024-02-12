var circle = {
    area: function(r = 7, pi = 3.14) {
        var a;

        a = pi * r * r;
        console.log("area of circle is" + a);
    },
    c: function(r = 5, pi = 3.14) {
        var v;

        v = 2 * pi * r;
        console.log("circumference of circle is" + v);
    }
};
module.exports = circle;