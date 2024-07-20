export type User = {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
  dob: {
    date: string;
    age: number;
  };
  location: {
    city: string;
    country: string;
  };
};
