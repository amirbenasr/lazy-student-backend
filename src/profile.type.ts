export type Profile = {
  id?: number;
  fname: string | null;
  lname: string | null;
  dob?: Date | null;
  country?: string | null;
  bio: string | null;
  avatar?: string | null;
  userId: number;
};
