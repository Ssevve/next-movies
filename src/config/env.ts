import z from 'zod';

const envSchema = z.object({
  TMDB_ACCESS_TOKEN: z.string().nonempty(),
});

export const env = envSchema.parse(process.env);
