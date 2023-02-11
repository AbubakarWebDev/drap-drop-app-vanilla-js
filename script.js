let whiteBox = document.querySelectorAll('.whitebox');
let imgBox = document.querySelector('.img');

imgBox.addEventListener('dragstart', () => {
    console.log("Image draging has been start");
    imgBox.classList.add("border");
    setTimeout(() => {
        imgBox.classList.add("d-none");
    }, 0);
})
imgBox.addEventListener('dragend', () => {
    console.log("Image draging has been End");
    imgBox.classList.remove("d-none");
    imgBox.classList.remove("border");
})

for (const iterator of whiteBox) {
    iterator.addEventListener('dragover', (e) => {
        e.preventDefault();   // By Deafault Drop event Does not Work due to drapover event so we prevent the default behaviour of dragover event.
        console.log("Some Draggable Item has been Placed on me (dragover)");
    });
    iterator.addEventListener('dragenter', (e) => {
        console.log("Some Draggable Item has been enter on me (dragenter)");
        iterator.classList.add('dashed');
    });
    iterator.addEventListener('dragleave', () => {
        console.log("Some Draggable Item has been leave from me (dragleave)");
        iterator.classList.remove('dashed');
    });
    iterator.addEventListener('drop', () => {
        console.log("Some Draggable Item has been droped on me (drop)");
        iterator.append(imgBox);
        iterator.classList.remove('dashed');
    });
}