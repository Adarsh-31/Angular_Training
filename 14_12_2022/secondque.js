var srt = function (value) {
    console.log(value.sort(function (a, b) { return a - b; }));
};
srt([10, 8, 9, 5, 7]);
