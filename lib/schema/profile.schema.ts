import { z, ZodType } from 'zod';
export const ProfileSchema = z.object({
  name: z
    .string()
    .min(1, {
      message: 'Nama Tidak Boleh 1 karakter.',
    })
    .optional(),
  email: z
    .string()
    .email({
      message: 'Please enter a valid email address',
    })
    .optional(),
  password: z
    .string()
    .min(8, {
      message: 'Password minimal 8 karakter.',
    })
    .optional(),
  profileImage: z.string(),
});
