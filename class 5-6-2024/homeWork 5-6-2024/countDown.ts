// Exercise# 5

function countDown():void{
    let mynum = 10;
    let j = true;
    while(j){
        console.log(mynum);
        mynum--;
        if(mynum === 0){
            j = false;
        }

    }
}
countDown()