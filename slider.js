let counter = 1

// Animated images
setInterval(()=>{
    document.querySelector('.img.show').classList.remove('show');
    const img  = document.querySelector(`.img-${counter}`);
    img.classList.add('show');
    counter++;

    if(counter > 5){
        counter = 1;
    }
},4000);