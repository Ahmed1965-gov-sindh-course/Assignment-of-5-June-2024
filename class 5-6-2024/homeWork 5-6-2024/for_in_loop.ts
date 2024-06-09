// Exercise # 2
//enumerate properties with for in loop

const bmw:any ={
    brand:"BMW",
    model:"X5",
    year:2020,

};


for (const key in bmw) {
    if(key.hasOwnProperty(bmw)){}
    console.log(key, ":", bmw[key]);
    } 

