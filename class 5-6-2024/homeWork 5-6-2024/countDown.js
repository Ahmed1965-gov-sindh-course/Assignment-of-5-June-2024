// Exercise# 5
function countDown() {
    var mynum = 10;
    var j = true;
    while (j) {
        console.log(mynum);
        mynum--;
        if (mynum === 0) {
            j = false;
        }
    }
}
countDown();
