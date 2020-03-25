function bai1() {
    for (let i = 1; i <= 300; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("Quán Số");
        } else if (i % 3 == 0) {
            console.log("Quán");
        } else if (i % 5 == 0) {
            console.log("Số");
        } else {
            console.log(i)
        }
    }
}
bai1()

function bai2cach1(num){
    var a = 1, b = 0, temp;
  
    while (num >= 0){
      temp = a;
      a = a + b;
      b = temp;
      num--;
    }
  
    return b;
  }

  console.log("Bai 2")
  console.log(bai2cach1(6));

  // function bai2cach2(num) {
  //   if (num <= 1) return 1;
  //   console.log(num)
  //   return bai2cach2(num - 1) + bai2cach2(num - 2);
  // }

  // console.log(bai2cach1(15))

  
