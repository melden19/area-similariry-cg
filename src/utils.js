export const preloadImage = (url, callback) => {
  const tempImg = new Image();
  tempImg.onload = () => {
    callback(tempImg);
  }
  tempImg.src = url;
}