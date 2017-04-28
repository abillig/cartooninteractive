function textBlockCreator(object){
  document.getElementById('project_title').innerHTML = object.name
  object.slides.forEach(function(infoObject, i){
    var new_section = document.createElement('div');
      new_section.className = "section"
      new_section.id = "text" + String(Number(i) + 1)
    var text_block = document.createElement('div')
      text_block.className = "text_block"
    var h1 = document.createElement("H1")                // Create a <h1> element
    var t1 = document.createTextNode(infoObject.headline);     // Create a text node
      h1.appendChild(t1);
    var h3 = document.createElement("H3")                // Create a <h1> element
    var t3 = document.createTextNode(infoObject.description);     // Create a text node
      h3.appendChild(t3);
      text_block.appendChild(h1);
      text_block.appendChild(h3);
      new_section.appendChild(text_block);
    document.getElementById('text_scroller').appendChild(new_section)
  })
}

function imageCreator(object){
  var lead_image_tag = document.createElement('img');
  lead_image_tag.src = object.leadImage
  // lead_image_tag.className = "section"
  document.getElementById('lead_image').appendChild(lead_image_tag)

  object.slides.forEach(function(infoObject, i){
    var image_tag = document.createElement('img');
    image_tag.id = "img" + String(Number(i) + 1)
    image_tag.src = infoObject.url
    i === 0 ? image_tag.className = "img" : image_tag.className = "img"
    document.getElementById('images').appendChild(image_tag)
  })
}
