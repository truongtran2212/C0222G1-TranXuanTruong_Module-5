export interface Student {
  id: number;
  name: string;
  dateOfBirth: string;
  gender: number;
  class: {
    id: number;
    name: string;
  }
}
