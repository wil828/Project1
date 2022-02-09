// created a namespace object to hold our app
const restaurant = {};

// add if the div is not undefined then run it

restaurant.init = () => {
    // const to check if class gallery is there
    const gallery = document.querySelector('.gallery');
    const formCheck = document.querySelector('form'); 
    
    // if gallery is there run the function below.
    if (gallery != null) {
        restaurant.carousel();
    }
    
    if (formCheck != null) {
        restaurant.formSubmit();
    }
    

};

restaurant.carousel = () => {

    //grabbing all the images in the classname 'item'
    const carouselImages = document.getElementsByClassName('item');

    // console.log(carouselImages);
    // console.log(carouselImages.length);
            
    // Shows the first photo;
    let photoCounter = 1;
    
    // activate the function
    showPhoto(photoCounter);
       
    // defining the arrows so when it is clicked it will move left or right depending on the item clicked.
    const moveLeft = document.getElementById('leftArrow');
    const moveRight = document.getElementById('rightArrow');
    // console.log(moveRight);
    
    // adding a listener for when the button gets clicked
    moveLeft.addEventListener ('click', function(event){
        photoCounter = photoCounter - 1;
        // starts the function showPhoto(photoCounter) to move it
        // console.log(photoCounter);
        showPhoto(photoCounter);
        // console.log(photoCounter);
    });
    
    // adding a listener for when the right button gets clicked
    moveRight.addEventListener ('click', function(event){
        photoCounter = photoCounter + 1;
        // console.log(photoCounter);
        showPhoto(photoCounter);
        // console.log(photoCounter);
    });

    function showPhoto(photoNum) {
        // if photo counter is larger than the amount of images, restart the counter.
        if (photoNum > carouselImages.length) {
            photoCounter = 1;
        }
        // if photo counter is less than 1, photocounter starts at the end of the line
        if (photoNum < 1) {
            photoCounter = carouselImages.length;
        }

        // hides all the images
        for (i = 0; i < carouselImages.length; i++) {
            carouselImages[i].style.display = "none";
        }
        // blocks the current image (photocounter) to be displayed
        carouselImages[photoCounter-1].style.display = "block";
    }
}



// FORM SUBMISSION ADD ON

restaurant.formSubmit = () => {
    const formElement = document.querySelector('form');
    console.log(formElement);


    
    formElement.addEventListener('submit', function(e) {
        // prevent form from refreshing webpage
        e.preventDefault();

        // added variables to check inputs for name, email and message
        let nameInput = document.querySelector('#name');
        let emailInput = document.querySelector('#email');
        let messageInput = document.querySelector('#message');
        
        if (nameInput.value && emailInput.value && messageInput.value) {
            // pop up window to show the input of a value
            alert('Thank you for your submission! We will be reading over your comment');
            nameInput.value = '';
            emailInput.value = '';
            messageInput.value = '';

        // if name input is empty
        } else if (nameInput.value == ''){
            alert('Please enter your name');

        // if email input is empty
        } else if (emailInput.value == '') {
            alert('Please enter your email');
        
        } else if (messageInput.value == '') {
            alert('Please write a message');
        }
        
    });


}


restaurant.init();