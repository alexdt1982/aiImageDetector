//Set the number of tags to display per page

const tagsPerPage = 20;

//Event listener for the uploads


document.getElementById('uploadButton').addEventListener('click', async () =>{
    //elements and file handling
    const fileInput = document.getElementById('imageInput');
    const file = fileInput.files[0];
    const imagePreview = document.getElementById('imagePreview');
    const uploadModal = document.getElementById('uploadModal');
    const uploadProgress = document.getElementById('uploadProgress');

    //if no file is selected, show a toast message
    if(!file) return showToast('Please select an image file');

    //Preivew the selected iamge
    const reader = new FileReader();
    reader.onload = e =>imagePreview.src = e.target.result;
    reader.readAsDataURL(file);

    //Imagga API credentials


})