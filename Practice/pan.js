let start=document.getElementById("start");
let txt1=document.getElementById('txt1');
let x=0;
start.addEventListener('click',()=>{
    start.innerHTML=`Loading.....`;
    setTimeout(()=>{
            start.innerHTML=`end`;
                x++;
    },1000);
});

let cart=document.getElementById("cart");
let c;
cart.addEventListener('click',()=>{
    const txt=`Added`;
    txt1.innerHTML=txt;
    clearTimeout(c);
    c=setTimeout(()=>{
        txt1.innerHTML=` `; 
    },3000);
})

let message = 2;
let add = document.getElementById('add');
let rem = document.getElementById('remove'); 

add.addEventListener('click', () => {
    document.title = '12g' + message;
    message++;
});

rem.addEventListener('click', () => {
    message--;
    if (message <= 0) {
        document.title = 'app';
    } else {
        document.title = '12g' + message;
    }
});


