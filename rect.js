var overloading = {
    area: function(l = 3, w = 5) {
        var a;
        a = l * w;
        console.log("area of rectangle is" + a);
    },
    s: function(size = 10) {
        var ans;
        ans = size * size;
        console.log("area of square is" + ans);
    }
};
module.exports = overloading;