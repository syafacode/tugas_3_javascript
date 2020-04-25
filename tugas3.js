function dataUmur(x = 9) {
    var umur = x;
    return umur;
}

var umurDefault = dataUmur();
console.log(umurDefault);

var umurEdit = dataUmur(x = 18);
console.log(umurEdit);