
// let images = document.querySelectorAll(".fotos img");
// let showImg = document.querySelector('.active');
// images.forEach((item, i)=>{
//     item.addEventListener("mouseover", function(){
//         showImg.src = item.dataset.bigImage;
//         console.log(item.dataset.bigImage);
//     })
// })


let showImg = document.querySelector('.active');
function InitializeGallery(){
    this.images = document.querySelectorAll(".fotos img");
        this.images.forEach((item, i)=>{
            item.addEventListener("mouseover", function(){
                showImg.src = item.dataset.bigImage; 
            })
            console.log(item.dataset.bigImage);
        })
}

let initializePhoto = new InitializeGallery();
