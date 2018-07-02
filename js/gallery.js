
// let images = document.querySelectorAll(".fotos img");
// let showImg = document.querySelector('.active');
// images.forEach((item, i)=>{
//     item.addEventListener("mouseover", function(){
//         showImg.src = item.dataset.bigImage;
//         console.log(item.dataset.bigImage);
//     })
// })

let gallery = document.querySelector(".gallery")
let showImg = gallery.querySelector('.active');
function InitializeGallery(gallery){
    this.images = gallery.querySelectorAll(".fotos img");
        this.images.forEach((item, i)=>{
            item.addEventListener("mouseover", function(){
                showImg.src = item.dataset.bigImage; 
            })
            console.log(item.dataset.bigImage);
        })
}

let initializePhoto = new InitializeGallery(gallery);
