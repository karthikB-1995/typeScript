interface User {
  name: string;
  //   age: number;
  age?: number; //if we age as option
  getMessage(): String;
}

// const user: User = {
//   name: "karthik",
//   age: 28,
//   getMessage() {
//     return "hello"+this.name;
//   },
// };
// const user1: User = {
//   name: "bharath",
//   age: 25,
//   getMessage() {
//     return "hello" + this.name;
//   },
// };
// console.log(user.getMessage);
