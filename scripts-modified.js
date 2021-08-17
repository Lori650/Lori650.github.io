let data1 = {
    photo: 'images-modified/image1.jpg',
    title: 'First star',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla lorem commodo risus suscipit, sit amet vulputate velit blandit. Donec pellentesque tincidunt tempus. Fusce vitae auctor metus.'
};

let data2 = {
    photo: 'images-modified/image2.jpg',
    title: 'E-Class',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla lorem commodo risus suscipit, sit amet vulputate velit blandit. Donec pellentesque tincidunt tempus. Fusce vitae auctor metus.'
};

let data3 = {
    photo: 'images-modified/image3.jpg',
    title: 'E-Class',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla lorem commodo risus suscipit, sit amet vulputate velit blandit. Donec pellentesque tincidunt tempus. Fusce vitae auctor metus.'
};

let data4 = {
    photo: 'images-modified/image4.jpg',
    title: 'Star on the hood',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla lorem commodo risus suscipit, sit amet vulputate velit blandit. Donec pellentesque tincidunt tempus. Fusce vitae auctor metus.'
};

let data5 = {
    photo: 'images-modified/image5.jpg',
    title: 'C-Class',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla lorem commodo risus suscipit, sit amet vulputate velit blandit. Donec pellentesque tincidunt tempus. Fusce vitae auctor metus.'
};

let data6 = {
    photo: 'images-modified/image6.jpg',
    title: 'S-Class',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla lorem commodo risus suscipit, sit amet vulputate velit blandit. Donec pellentesque tincidunt tempus. Fusce vitae auctor metus.'
};

let data7 = {
    photo: 'images-modified/image7.jpg',
    title: 'G-Class',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla lorem commodo risus suscipit, sit amet vulputate velit blandit. Donec pellentesque tincidunt tempus. Fusce vitae auctor metus.'
};

let data8 = {
    photo: 'images-modified/image8.jpg',
    title: 'Star at night',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla lorem commodo risus suscipit, sit amet vulputate velit blandit. Donec pellentesque tincidunt tempus. Fusce vitae auctor metus.'
};

let selectedPhoto = 0
let selectedBefore = 7
let arrayPhotos = [data1,data2,data3,data4,data5,data6,data7,data8]
  
let loadPhoto = (photoNumber) => {
  $('#photo').attr('src', arrayPhotos[photoNumber].photo);
  $('#photo-title').text( arrayPhotos[photoNumber].title);
  $('#photo-description').text( arrayPhotos[photoNumber].description);

  $('#tnID'+selectedPhoto).addClass ( 'selectedThumbnail')
  $('#triangleID'+selectedPhoto).addClass ( 'selectedTriangle-up')

  if (selectedBefore!=selectedPhoto){
    $('#tnID'+selectedBefore).removeClass ( 'selectedThumbnail')
    $('#triangleID'+selectedBefore).removeClass ( 'selectedTriangle-up')  
  }
 
  selectedBefore=selectedPhoto
}
  
loadPhoto(selectedPhoto)
  
$('#right').on ('click', function(){
  if (selectedPhoto<7) {selectedPhoto++}
  else if (selectedPhoto===7) {selectedPhoto=0}    
  loadPhoto(selectedPhoto)
})

$('#left').on ('click', function(){
  if (selectedPhoto>0) {selectedPhoto--}
  else if (selectedPhoto===0) {selectedPhoto=7}    
  loadPhoto(selectedPhoto)
})

arrayPhotos.forEach((item, index) => {
  $(".lowerScreen").append(`<div class="thumbnailAndTitle" id="tnAndTID${index}"> 
    <div class="title">${arrayPhotos[index].title}</div>
    <div class="triangle-down"> </div>
    <div class="triangle-up" id="triangleID${index}"> </div>
    <img class="thumbnail" id="tnID${index}" data-index="${index}"> </div>`)

  $(`#tnAndTID${index} img:last-of-type`).attr('src', arrayPhotos[index].photo);
})  

$('.thumbnail').click((event) => {
  let indexClicked = $(event.target).attr('data-index');
  let numberIndex = parseInt(indexClicked);
  selectedPhoto=numberIndex
  loadPhoto(selectedPhoto)
})