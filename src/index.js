    function factorial(n, a) {
        var count = 0;
        for (var i = a; i < n + 1; i = i + a) {
            if ((i % a) == 0) {
                count++;
                if ((i / a) % a == 0) {
                    var N = (i / a);
                    var D = a;
                    while (N > 1) {
                        if (N % D == 0) {
                            count++;
                            N = (N / D >> 0);
                        }
                        else {
                            N = 0;
                        }
                    }
                }
            }
        }
        return count;
    };

    function getNOK(num) {
        var j = 1;
        var i = 2;
        var a = new Array();
        do {
            if (num % i == 0) {
                a[j] = i;
                j++;
                num = num / i;
            }
            else i++;
        }
        while (i < num);
        a[j] = i;

        return a;
    };

module.exports = function getZerosCount(number, base) {
        var nok = getNOK(base);
        var res = [];
        var zeros = Number.MAX_VALUE;
        var diff = 0;
        var fact = 0;
        nok.forEach(function (item, i, arr) {
           if (diff != item) {
               fact = factorial(number, item);
               res.push(fact);
               diff = item;
           } else
               res.push(fact);
        });
        for (var i = 0; i < res.length; i++) {
            var key = res[i];
            key = key / res.filter(function (number) {
                    return number == key;
                }).length >> 0;

            if (zeros > key) {
                zeros = key;
            }
        }
        return zeros;
    };