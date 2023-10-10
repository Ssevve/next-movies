interface GetTMDBImagePathParams {
  width?: number;
  height?: number;
  image: string;
}

export default function getTMDBImagePath({ width, height, image }: GetTMDBImagePathParams) {
  const baseImageUrl = 'https://image.tmdb.org/t/p';

  if (!width || !height) return `${baseImageUrl}/original${image}`;
  else return `${baseImageUrl}/w${width}_and_h${height}_face${image}`;
}
