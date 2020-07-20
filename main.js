let imagesArray = [];

function Image(image) {
    this.image_url = image.image_url;
    this.title = image.title;
    this.description = image.description;
    this.keyword = image.keyword;
    this.horns = image.horns;
    // imagesArray.push(this);
    // localStorage.setItem('imagesArray', JSON.stringify(imagesArray));
}




$("#myList").change(function() {
    $('#cardContainer').html('');

    let section = $('#photo-template').clone();
    $('#container').empty();
    //section.find('img').serAttr('src','');
    $('#container').append(section);


  
            //location.reload(true);
 


    var selectedText = $(this).find(':selected').text();
    console.log('selectedText: ',selectedText);
    $.get('data/page-1.json').then(data => {
        data.forEach(element => {
            let image = new Image(element);

           

                        image.render();

            
        }
        );
    });
});










$("button").click(function () {
   
});



Image.prototype.render = function () {
    let section = $('#photo-template').clone();
    let img = section.children('img');
    let title=section.children('h2');
    let header=section.children('p');

    section.attr('id','newImage');

    img.attr("src", this.image_url);
    title.text(this.title);
    header.text(this.description);

  
    
    $('#cardContainer').append(section);
    $('#clonedContainer').hide();


}



