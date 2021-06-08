import bcrypt from "bcryptjs";

const users = [
  {
    name: "Juan Gomez",
    email: "jugo@mail.com",
    //*lo podemos hacer sync porque es solo para prueba
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Pepito Perez",
    email: "pepe@mail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Paula Valija",
    email: "pava@mail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Carina Jastre",
    email: "caja@mail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
