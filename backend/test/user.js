const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = chai;
chai.use(chaiHttp);

let userId;
let userName = "test88@gmail.com";
let newUserName = "newtest@gmail.com";
let password = "password";

let userData = {
  name: "Test User",
  userName,
  password,
  userType: "normalUser",
  credits: 100,
};

describe("User controller test cases", function () {
  this.timeout(5000);

  describe("User sign up", function () {
    it("should create a new user and return it", function (done) {
      chai
        .request("https://csse-bcfq.onrender.com")
        .post("/api/user/signup")
        .send(userData)
        .end(function (err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("object");
          expect(res.body).to.have.property("_id");
          expect(res.body).to.have.property("name").equal(userData.name);
          expect(res.body)
            .to.have.property("userName")
            .equal(userData.userName);
          expect(res.body)
            .to.have.property("userType")
            .equal(userData.userType);

          userId = res.body._id;
          password = res.body.password;
          done();
        });
    });

    // describe("User login", function () {
    //   it("should  return the user when logging in", function (done) {
    //     chai
    //       .request("https://csse-bcfq.onrender.com")
    //       .post("/api/user/login")
    //       .send({
    //         userName,
    //         password,
    //       })
    //       .end(function (err, res) {
    //         expect(err).to.be.null;
    //         expect(res.body).to.be.an("object");
    //         expect(res.body).to.have.property("_id");
    //         expect(res.body).to.have.property("name").equal(userData.name);
    //         expect(res.body).to.have.property("userName").equal(userName);
    //         expect(res.body)
    //           .to.have.property("userType")
    //           .equal(userData.userType);
    //         expect(res.body)
    //           .to.have.property("credits")
    //           .equal(userData.credits);

    //         userId = res.body._id;
    //         password = res.body.password;

    //         done();
    //       });
    //   });

    it("should return an error when the username already exists", function (done) {
      userData = {
        name: "Test User",
        userName: "test88@gmail.com",
        password: "password",
        userType: "normalUser",
        credits: 100,
      };

      chai
        .request("https://csse-bcfq.onrender.com")
        .post("/api/user/signup")
        .send(userData)
        .end(function (err, res) {
          expect(err).to.be.null;
          done();
        });
    });
  });
});

describe("Update user name", function () {
  it("should update the user name and return the updated user", function (done) {
    chai
      .request("https://csse-bcfq.onrender.com")
      .patch("/api/user/update/" + userId)
      .send({ userName: newUserName })
      .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("object");
        expect(res.body).to.have.property("_id").equal(userId);
        expect(res.body).to.have.property("userName").equal(newUserName);
        done();
      });
  });

  it("should return an error when the user id is not found", function (done) {
    const wrongId = "nonexistentId";

    chai
      .request("https://csse-bcfq.onrender.com")
      .patch("/api/user/" + wrongId)
      .send({ userName: newUserName })
      .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(404);
        done();
      });
  });
});

describe("Get user by id", function () {
  it("should return the user with the given id", function (done) {
    chai
      .request("https://csse-bcfq.onrender.com")
      .get("/api/user/" + userId)
      .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("object");
        expect(res.body).to.have.property("_id").equal(userId);
        done();
      });
  });

  it("should return an error when the id is not found", function (done) {
    const wrongId = "nonexistentId";

    chai
      .request("https://csse-bcfq.onrender.com")
      .get("/api/user/" + wrongId)
      .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(404);
        done();
      });
  });
});

describe("Delete user by id", function () {
  it("should delete the user with the given id and return a success message", function (done) {
    chai
      .request("https://csse-bcfq.onrender.com")
      .delete("/api/user/deleteUser/" + userId)
      .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
      });
  });

  it("should return an error when the id is not found", function (done) {
    const wrongId = "nonexistentId";

    chai
      .request("https://csse-bcfq.onrender.com")
      .delete("/api/user/deleteUser/" + wrongId)
      .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(404);
        done();
      });
  });
});
