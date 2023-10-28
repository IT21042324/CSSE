const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = chai;
chai.use(chaiHttp);

describe("Inquiry controller test cases", function () {
  let inquiryId;
  let isCreated = false;

  describe("Purchase controller test cases", function () {
    const purchaseData = {
      userName: "test@gmail.com",
      credits: 100,
    };

    it("should create a new purchase and return it", function (done) {
      chai
        .request("https://csse-bcfq.onrender.com")
        .post("/api/purchase")
        .send(purchaseData)
        .end(function (err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("object");
          expect(res.body).to.have.property("_id");
          expect(res.body)
            .to.have.property("userName")
            .equal(purchaseData.userName);
          expect(res.body)
            .to.have.property("credits")
            .equal(purchaseData.credits);

          inquiryId = res.body._id;
          //   purchaseSuccess = true;
          isCreated = true;
          done();
        });
    });

    it("should return the purchase with the given id", function (done) {
      chai
        .request("https://csse-bcfq.onrender.com")
        .get("/api/purchase/" + inquiryId)
        .end(function (err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("object");
          expect(res.body).to.have.property("_id").equal(inquiryId);
          expect(res.body)
            .to.have.property("userName")
            .equal(purchaseData.userName);
          expect(res.body)
            .to.have.property("credits")
            .equal(purchaseData.credits);

          done();
        });
    });

    it("should return an error when the id is not found", function (done) {
      const id = "nonexistentId";

      chai
        .request("https://csse-bcfq.onrender.com")
        .get("/api/purchase/" + id)
        .end(function (err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(400);
          done();
        });
    });

    it("should return an error when the username is not found", function (done) {
      const purchaseData = {
        userName: "nonexistent@gmail.com",
        credits: 100,
      };

      chai
        .request("https://csse-bcfq.onrender.com")
        .post("/api/purchase")
        .send(purchaseData)
        .end(function (err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(400);
          done();
        });
    });
  });

  describe("DELETE /api/purchase/:id", function () {
    it("should delete the purchase with the given id and return a success message", function (done) {
      chai
        .request("https://csse-bcfq.onrender.com")
        .delete("/api/purchase/" + inquiryId)
        .end(function (err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res.text).to.equal(
            `"Record ${inquiryId} is deleted successfully"`
          );

          done();
        });
    });

    it("should return an error when the id is not found", function (done) {
      const wrongId = "nonexistentId";

      chai
        .request("https://csse-bcfq.onrender.com")
        .delete("/api/purchase/" + wrongId)
        .end(function (err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(400);
          done();
        });
    });
  });

  describe("GET /api/purchases", function () {
    it("should return all purchases", function (done) {
      chai
        .request("https://csse-bcfq.onrender.com")
        .get("/api/purchase/")
        .end(function (err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("array");
          done();
        });
    });
  });
});
