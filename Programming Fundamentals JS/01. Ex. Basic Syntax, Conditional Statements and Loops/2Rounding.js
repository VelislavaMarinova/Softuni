function rounding(number, precision) {
    let num = Number(number);
    let prec = Number(precision);

    if (prec > 15) {
        prec = 15
    }
    let res=num.toFixed(prec);

    console.log(parseFloat(res));

}
rounding(3.000, 2)