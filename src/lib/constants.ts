export const PATH = 'portfolio';
export const CMS_NAME = 'Hygraph';
export const CMS_URL = 'https://www.hygraph.com';
export const MAX_ICON_HEIGHT = 65;
export const MAX_ICON_WIDTH = 65;
export const IMAGE_TRANSFORMATION = JSON.stringify({
  transformation: {
    image: {
      resize: {
        height: MAX_ICON_HEIGHT,
        width: MAX_ICON_WIDTH,
      }
    }
  }
});
console.log(IMAGE_TRANSFORMATION)
