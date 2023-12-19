type ID = String;
type popularTag = String;
type maybePopulartag = popularTag | null;
interface UserInterface {
  id: ID;
  name: string;
  surname: string;
}
const popularTag: popularTag[] = ["draggon", "apple"];
const dragonTag: maybePopulartag = "apple";
let userName: string = "karthik";
let pageNumber: string | number = 1;
let errorMessage: string | null;
let users: UserInterface | null = null;
