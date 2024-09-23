const images = document.images;

for (const img of images) {
  const usemapAttr = img.getAttribute('usemap');
  if (usemapAttr) {
    const imgSrc = img.getAttribute('src');
    const mapName = usemapAttr.substring(1);
    const map = document.querySelector(`map[name="${mapName}"]`);

    const areas = Array.from(map.getElementsByTagName('area')).map(area => ({
      shape: area.getAttribute('shape'),
      coords: area.getAttribute('coords').split(',').map(Number),
    }));

    const originalImage = new Image();
    originalImage.src = imgSrc;

    originalImage.onload = function () {
      // Extract text using Tesseract.js for each area
      areas.forEach((area, index) => {
        // Create a canvas to draw the highlighted area
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        const xCoords = area.coords.filter((_, i) => i % 2 === 0);
        const yCoords = area.coords.filter((_, i) => i % 2 !== 0);
        // Calculate the width and height of the canvas based on the area coordinates
        const width = Math.max(...xCoords) - Math.min(...xCoords);
        const height = Math.max(...yCoords) - Math.min(...yCoords);

        canvas.width = width;
        canvas.height = height;

        // Draw the original image on the canvas
        ctx.drawImage(originalImage, -Math.min(...xCoords), -Math.min(...yCoords));
        Tesseract.recognize(
          canvas.toDataURL('image/jpeg'),
          'eng'
        ).then(({ data: { text } }) => {
          console.log(`Text for Area ${index + 1}: ${text}`);
        });
      });

      // Display the original image

    };
  }

}

