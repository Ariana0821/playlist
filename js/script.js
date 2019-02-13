/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Pacifier " , "Saturday Nights " , "I Fall Apart", "Missin You Crazy ", "Lost in Japan ", "Changed"];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above
var images = ["https://images.genius.com/c7756e92700c5c4c87ed12536a3e5d27.1000x1000x1.jpg" , 
"https://i.pinimg.com/originals/42/6b/a6/426ba6075dd6cf33dc4c26cd242a5f38.jpg" ,
"https://i.ytimg.com/vi/7a66clRobKI/maxresdefault.jpg",
"https://images-na.ssl-images-amazon.com/images/I/51hvhbp5SWL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_.jpg",
"https://images-na.ssl-images-amazon.com/images/I/A16Tg1LfILL._SY355_.jpg",
"https://i.ytimg.com/vi/L93T-_iTZYY/maxresdefault.jpg"];
var artist = ["Catfish and the Bottlemen", "Khalid", "Post Malone", "Russ", "Shawn Mendes" , "Bazzi"];
var songLength = ["237", "209", "223", "226", "201", "143"];
var links = ["https://www.youtube.com/watch?v=KVi6NKO8aCE" ,
"https://www.youtube.com/watch?v=esh8mNoPxGE",
"https://www.youtube.com/watch?v=7a66clRobKI",
"https://www.youtube.com/watch?v=cuqvuffSKCI",
"https://www.youtube.com/watch?v=0vGswW61i8g",
"https://www.youtube.com/watch?v=L93T-_iTZYY"];



    // BELOW Use forEach Loop to display the data from each of your array's in the correct div
function displaySongInfo(){
    songs.forEach(function(song){
        $("#songs").append("<p>" + song + "</p>");
});

images.forEach(function(image){
    $("#images").append("<img src='" + image + "'>");
});

artist.forEach(function(artist){
    $("#artists").append("<p>" + artist + "</p>");
});

songLength.forEach(function(length){
    $("#lengths").append("<p>" + length + "</p>");
});

links.forEach(function(link){
    $("#links").append("<a href='" + link + "'> Listen </a>");
});
}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs
    $("#images").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();

}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
    $("#songs").add();
    $("#images").add();
    $("#artists").add();
    $("#lengths").add();
    $("#links").add();

}

$("#add").click(function() {
    
    var songN = $("#song").val();
    var imageU = $("#image").val();
    var artistN = $("#artist").val();
    var songL = $("#length").val();
    var link = $("#links").val();
    
    songs.push(songN);
    artist.push(artistN);
    images.push(imageU);
    songLength.push(songL);
    links.push(link);
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
