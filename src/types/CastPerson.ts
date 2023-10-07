import Gender from '@/types/Gender';

export default interface CastPerson {
  id: number;
  name: string;
  imagePath: string;
  character: string;
  gender: Gender;
}
