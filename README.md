# Interactive Cartoons

This is a scrollable image deconstruction program that allows users to focus in on different portions of images. It works by highlighting a portion of the image and displaying a text overlay describing what the user is seeing. With each new description that appears in the viewport, the program swaps in the correct image. The program takes in a JSON object of paths to images and associated text overlays. It dynamically builds HTML elements for each image and text overlay, and swaps them in and out as they appear in the viewport.

The images I've fed into the program are cartoons from late 1800s America. These images are rich in imagery and references that may be lost upon the viewer. The text overlays describe these references and figures within the images, giving context to a modern-day viewer.

The project could take in any set of images and descriptions wrapped in a JSON object, and I plan to build this out into an adaptive app that takes in images and descriptions and creates an image deconstruction scroller. I'll focus on historical cartoon imagery because I'm nerdily into American history and satire, but the program is more adaptive.

This idea builds upon a very rudimentary version of itself that I created over a year ago. That version relies upon a JavaScript library and is less adaptable.
