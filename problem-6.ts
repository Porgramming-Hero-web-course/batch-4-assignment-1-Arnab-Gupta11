{
  //Problem-6
  interface Profile {
    name: string;
    age: number;
    email: string;
  }
  function updateProfile(obj1: Profile, obj2: Partial<Profile>): Profile {
    return { ...obj1, ...obj2 };
  }
}
