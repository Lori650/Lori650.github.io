let data1 = {
    photo: 'images/pebble1.jpg',
    title: 'Grey pebbles',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla lorem commodo risus suscipit, sit amet vulputate velit blandit. Donec pellentesque tincidunt tempus. Fusce vitae auctor metus.'
};

let data2 = {
    photo: 'images/pebble2.jpg',
    title: 'Brown pebbles',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla lorem commodo risus suscipit, sit amet vulputate velit blandit. Donec pellentesque tincidunt tempus. Fusce vitae auctor metus.'
};

let data3 = {
    photo: 'images/mountain.jpg',
    title: 'Snowy mountain',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla lorem commodo risus suscipit, sit amet vulputate velit blandit. Donec pellentesque tincidunt tempus. Fusce vitae auctor metus.'
};

let data4 = {
    photo: 'images/pebble3.jpg',
    title: 'Black pebbles',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla lorem commodo risus suscipit, sit amet vulputate velit blandit. Donec pellentesque tincidunt tempus. Fusce vitae auctor metus.'
};

let data5 = {
    photo: 'images/desk.jpg',
    title: 'Desk with stuff',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla lorem commodo risus suscipit, sit amet vulputate velit blandit. Donec pellentesque tincidunt tempus. Fusce vitae auctor metus.'
};

let data6 = {
    photo: 'images/book.jpg',
    title: 'Reading and coffee',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla lorem commodo risus suscipit, sit amet vulputate velit blandit. Donec pellentesque tincidunt tempus. Fusce vitae auctor metus.'
};

let data7 = {
    photo: 'images/dream.jpg',
    title: 'Have a good dream',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla lorem commodo risus suscipit, sit amet vulputate velit blandit. Donec pellentesque tincidunt tempus. Fusce vitae auctor metus.'
};

let data8 = {
    photo: 'images/night.jpg',
    title: 'Night at the lake',
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