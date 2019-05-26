require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});

console.log(process.env.NODE_ENV);
console.log(process.env.DB_DIALECT);

module.exports = {
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  dialect: process.env.DB_DIALECT || "postgres",
  storage: "./__testes__/database.sqlite",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};
