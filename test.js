// Write unit test to test the route "/" and check if the response is "Hello World".

const expect = require("chai").expect;
const chaiHttp = require("chai-http");
var request = require('request');

describe("Test the root path", () => {
    it("It should response the GET method", (done) => {
        request('http://localhost:3000', function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
        });
    });
    });