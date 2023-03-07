export default function giver(imageData) {
  let imgArray = [];
  for (let index = 0; index < 7; index++) {
    imgArray.push({img: `https://image.tmdb.org/t/p/original/${imageData[index].backdrop_path}` , title:imageData[index].title , id:imageData[index].id });
  }
  return imgArray;
}
