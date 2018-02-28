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
        var j = 0;
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
        var diff = 0;
        var fact =  0;
        var maxNok = Math.max.apply(null, nok);
        var d = nok.filter(function (nn) {
            return nn == maxNok;
        }).length;
            fact = factorial(number, maxNok);
        return fact / d >> 0;
    };