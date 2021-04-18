/* Nagy képek listája */
var imagesData = [
    {
        photo: "images/costa.jpg",
        title: "Costa Rica",
        description: "Costa Rica, Turrialba Mountains"
    },
    {
        photo: "images/argentina.jpg",
        title: "Argentina",
        description: "El Chalten Sunrise - Patagonia, Argentina"
    },
    {
        photo: "images/rainforest.jpg",
        title: "Rainforest",
        description: "Olympic National Park, Rainforest"
    },

]

/*Kis képek listája*/
var thumbData = [
    {
        thumb: "images/thumbnails/costa_thumbnail.jpg",
        title: "Costa Rica"
    },
    {
        thumb: "images/thumbnails/argentina_thumbnail.jpg",
        title: "Argentina"
    },
    {
        thumb: "images/thumbnails/rainforest_thumbnail.jpg",
        title: "Rainforest"
    }
]

/* A nagy és kis képek indexeit tartalmazó változók deklarálása */
var currentPhoto = 0
var activeIndex = currentPhoto

/* A nagy képek változóba történő beolvasásának függvénye */
var loadImageContainer = function(currentPhoto) {
    $("#photo").attr("src", imagesData[currentPhoto].photo)
    $("#image-title").text(imagesData[currentPhoto].title)
    $("#image-description").text(imagesData[currentPhoto].description)
}

/* A kis képek beolvasása és html tag-jeinek létrehozása */ 
function loadThumbnails(itemData, index) {
    $("#thumbnails-container").append(
        `<div class="thumbnail-box">
            <img class="thumbnail" data-idx="${index}" src="${itemData.thumb}">
            <p class="title">${itemData.title}</p>
        </div>`
    )
}

/* Betölti az első fotót és a thumbnail-eket. */
loadImageContainer(currentPhoto)
thumbData.forEach(loadThumbnails)
console.log(activeIndex)
$(`.thumbnail[data-idx="${activeIndex}"]`).css({"box-shadow": "0 4px 8px black"})

/* A balra és jobbra nyilakkal történő navigálás lekezelése */
$("#arrow-left").click(function() {
    activeIndex = currentPhoto
    if(currentPhoto > 0) {
        currentPhoto--
    } else {
        currentPhoto = imagesData.length - 1
    }
    loadImageContainer(currentPhoto)
    activeThumbnail(activeIndex)
})

$("#arrow-right").click(function() {
    activeIndex = currentPhoto
    if(currentPhoto < imagesData.length - 1) {
        currentPhoto++
    } else {
        currentPhoto = 0
    }
    loadImageContainer(currentPhoto)
    activeThumbnail(activeIndex)
})

/* A kiválasztott kis képeknek megfelelő nagy fotóra váltás */
$(".thumbnail").click(function(event) {
    activeIndex = currentPhoto
    var idxClicked = $(event.target).attr("data-idx")
    var idxNumber = parseInt(idxClicked)
    currentPhoto = idxNumber
    activeThumbnail(activeIndex)
    loadImageContainer(currentPhoto)
})

function activeThumbnail (activeIndex) {
    $(`.thumbnail[data-idx="${activeIndex}"]`).removeAttr("style")
    activeIndex = currentPhoto
    $(`.thumbnail[data-idx="${activeIndex}"]`).css("box-shadow", "0 4px 8px black")
}