# Drag and Drop App

This is a simple drag-and-drop application where you can drag an image and drop it into one of the available white boxes. The app utilizes native JavaScript event listeners to manage drag-and-drop functionality.

## Features

- Drag an image and start the drag action.
- Drop the image into any of the available white boxes.
- Visual feedback is provided when dragging (e.g., border highlights).
- The app supports multiple white boxes for image placement.

## Technologies Used

- HTML
- CSS
- JavaScript (DOM Manipulation)

## How to Use

1. Clone or download the repository to your local machine.
2. Open the `index.html` file in your browser.
3. Drag the image from the designated image box.
4. Drop it into any of the white boxes.
5. The image will move to the box, and feedback will be shown for each drag event.

## Code Explanation

- **Drag Events:**
  - `dragstart`: Triggered when the dragging starts. It adds a border to the image and hides it temporarily.
  - `dragend`: Triggered when the dragging ends. It restores the image and removes the border.

- **Drop Zone Events (for each white box):**
  - `dragover`: Prevents the default behavior to allow dropping.
  - `dragenter`: Highlights the box when an item is dragged over it.
  - `dragleave`: Removes the highlight when an item leaves the box.
  - `drop`: Moves the image into the white box when dropped.

## Code Example

```javascript
let whiteBox = document.querySelectorAll('.whitebox');
let imgBox = document.querySelector('.img');

imgBox.addEventListener('dragstart', () => {
    console.log("Image dragging has started");
    imgBox.classList.add("border");
    setTimeout(() => {
        imgBox.classList.add("d-none");
    }, 0);
});

imgBox.addEventListener('dragend', () => {
    console.log("Image dragging has ended");
    imgBox.classList.remove("d-none");
    imgBox.classList.remove("border");
});

for (const iterator of whiteBox) {
    iterator.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log("An item has been dragged over me (dragover)");
    });
    iterator.addEventListener('dragenter', (e) => {
        console.log("An item has entered on me (dragenter)");
        iterator.classList.add('dashed');
    });
    iterator.addEventListener('dragleave', () => {
        console.log("An item has left from me (dragleave)");
        iterator.classList.remove('dashed');
    });
    iterator.addEventListener('drop', () => {
        console.log("An item has been dropped on me (drop)");
        iterator.append(imgBox);
        iterator.classList.remove('dashed');
    });
}
