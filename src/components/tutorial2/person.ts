export interface Person {
  name: string;
  age: number;
  address: {
    street: string;
    city: string;
    state: string;
    zip: number;
  };
  isGay: boolean;
}
