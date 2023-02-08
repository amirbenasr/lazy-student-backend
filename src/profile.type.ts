export type Profile = {
  id?: string;
  fname: string | null;
  lname: string | null;
  dob?: Date | null;
  country?: string | null;
  bio: string | null;
  avatar?: string | null;
  userId: string;
};
