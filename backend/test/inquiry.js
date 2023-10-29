// Import modules
const mocha = require("mocha");
const chai = require("chai");
const { expect } = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

let inquiryId;

// Test suite for add a inquiry scenario
describe("POST /api/inquiry", function () {
  this.timeout(5000);

  // Define a variable to store the inquiry id

  // Test case: valid inquiry data
  it("should create a new inquiry and return it", function (done) {
    // Define the inquiry data
    const inquiryData = {
      userName: "test@gmail.com",
      inquiryType: "penalty",
      description: "This is a test inquiry",
      penaltyAmount: "Rs. 100",
    };

    // Make a POST request to /api/inquiry with the inquiry data
    chai
      .request("https://csse-bcfq.onrender.com")
      .post("/api/inquiry")
      .send(inquiryData)
      .end(function (err, res) {
        // Check if there is no error
        expect(err).to.be.null;
        // Check if the response status is 201 (created)
        expect(res).to.have.status(201);
        // Check if the response body is an object
        expect(res.body).to.be.an("object");
        // Check if the response body has the expected properties and values
        expect(res.body).to.have.property("_id");
        expect(res.body)
          .to.have.property("userName")
          .equal(inquiryData.userName);
        expect(res.body)
          .to.have.property("inquiryType")
          .equal(inquiryData.inquiryType);
        expect(res.body)
          .to.have.property("description")
          .equal(inquiryData.description);
        expect(res.body)
          .to.have.property("penaltyAmount")
          .equal(inquiryData.penaltyAmount);
        // Store the inquiry id for later use
        inquiryId = res.body._id;
        // Call done to indicate that the test is done
        done();
      });
  });

  describe("GET /api/inquiry/:id", function () {
    it("should return the inquiry with the given id", function (done) {
      chai
        .request("https://csse-bcfq.onrender.com")
        .get("/api/inquiry/" + inquiryId)
        .end(function (err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("object");
          expect(res.body).to.have.property("_id").equal(inquiryId);
          expect(res.body).to.have.property("userName").equal("test@gmail.com");
          expect(res.body).to.have.property("inquiryType").equal("penalty");
          expect(res.body)
            .to.have.property("description")
            .equal("This is a test inquiry");
          expect(res.body).to.have.property("penaltyAmount").equal("Rs. 100");
          done();
        });
    });
  });

  // Test suite for update it using that id scenario
  describe("PATCH /api/inquiry/update/:id", function () {
    // Test case: valid inquiry id and data
    it("should update the inquiry with the given id and data and return it", function (done) {
      // Define the updated inquiry data
      const updatedInquiryData = {
        userName: "test@gmail.com",
        inquiryType: "penalty",
        description: "This is an updated test inquiry",
        penaltyAmount: "Rs. 200",
      };

      // Make a PATCH request to /api/inquiry/update/:id with the inquiry id and data
      chai
        .request("https://csse-bcfq.onrender.com")
        .patch("/api/inquiry/update/" + inquiryId)
        .send(updatedInquiryData)
        .end(function (err, res) {
          // Check if there is no error
          expect(err).to.be.null;
          // Check if the response status is 200 (ok)
          expect(res).to.have.status(200);
          // Check if the response body is an object
          expect(res.body).to.be.an("object");
          // Check if the response body has the expected properties and values
          expect(res.body).to.have.property("_id").equal(inquiryId);
          expect(res.body)
            .to.have.property("userName")
            .equal(updatedInquiryData.userName);
          expect(res.body)
            .to.have.property("inquiryType")
            .equal(updatedInquiryData.inquiryType);
          expect(res.body)
            .to.have.property("description")
            .equal(updatedInquiryData.description);
          expect(res.body)
            .to.have.property("penaltyAmount")
            .equal(updatedInquiryData.penaltyAmount);
          // Call done to indicate that the test is done
          done();
        });
    });
  });

  // Test suite for delete it using that id scenario
  describe("DELETE /api/inquiry/delete/:id", function () {
    // Test case: valid inquiry id
    it("should delete the inquiry with the given id and return it", function (done) {
      // Make a DELETE request to /api/inquiry/delete/:id with the inquiry id
      chai
        .request("https://csse-bcfq.onrender.com")
        .delete("/api/inquiry/delete/" + inquiryId)
        .end(function (err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("object");
          expect(res.body).to.have.property("_id").equal(inquiryId);
          expect(res.body).to.have.property("userName").equal("test@gmail.com");
          expect(res.body).to.have.property("inquiryType").equal("penalty");
          expect(res.body)
            .to.have.property("description")
            .equal("This is an updated test inquiry");
          expect(res.body).to.have.property("penaltyAmount").equal("Rs. 200");
          done();
        });
    });
  });
});
