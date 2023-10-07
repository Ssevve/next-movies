export default interface TMDBCastPerson {
  id: number;
  name: string;
  profile_path: string;
  character: string;
  gender: 0 | 1 | 2 | 3;
}
