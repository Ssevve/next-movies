export default interface TMDBTvShowCastPerson {
  id: number;
  name: string;
  profile_path?: string;
  roles: [
    {
      character: string;
    },
  ];
  total_episode_count: number;
}
