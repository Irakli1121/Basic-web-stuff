let images = ["/images/image_part_001.jpg", "/images/image_part_002.jpg", "/images/image_part_003.jpg", "/images/image_part_004.jpg", "/images/image_part_005.jpg", "/images/image_part_006.jpg", "/images/image_part_007.jpg", "/images/image_part_008.jpg"]
let used = [];

let correctOrderOfImages = [1,2,3,4,5,6,7,8];
let divOrder = [1,4,7,2,5,8,3,6];

//generate puzzle
for (let i=0; i<8; i++){
    let img = document.createElement("img");
    let idx = Math.round(Math.random()*7);
    //console.log(idx);
    if (used.indexOf(idx) != -1){
        while(used.indexOf(idx) != -1){
            idx = Math.round(Math.random()*7);
        }
    }
    console.log(idx);
    img.src = images[idx];
    //console.log(img);
    used.push(idx);
    document.getElementById(i+1).appendChild(img);
}



document.getElementById("main").addEventListener('click', (event)=>{
    //console.log(event.target.parentElement);

    parentDiv = event.target.parentElement;
    emptyDiv = document.getElementById("empty");

    if (event.target.src != undefined){
        let id = parentDiv.id;
        let empty = document.getElementById("empty");
        let newImg = document.createElement("img");
        newImg.src = event.target.src;
        //console.log(newImg);
        empty.appendChild(newImg);
        empty.removeAttribute("id");
        parentDiv.removeAttribute("id");
        empty.setAttribute("id", id);
        parentDiv.removeChild(parentDiv.childNodes[0]);
        parentDiv.setAttribute("id", "empty");
    } 

    //pushing images to array
    let currentImagesOrder = [];
    let imageElements = document.getElementsByTagName("img");
    for (let i = 0; i <8; i++){
        let tmpImg = imageElements[i].src;
        // console.log(tmpImg[tmpImg.length-5]);
        currentImagesOrder.push(parseInt(tmpImg[tmpImg.length-5]));
    }

    console.log(currentImagesOrder);
    console.log(divOrder);
    let youWon = true;
    for (let i=0; i<8; i++){
        if (currentImagesOrder[i] != divOrder[i]){
            youWon = false;
            break;
        } else {
            youWon = true;
        }
    }

    let thirdRow = document.getElementById("thirdRow");

    console.log()

    if (youWon && thirdRow.childNodes[5].id == "empty"){
        document.getElementById("won").innerHTML = "<h1>You have won</h1>"
    }



    

})