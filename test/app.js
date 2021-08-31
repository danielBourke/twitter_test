const chai = require("chai")
const chaiHttp = require("chai-http")

const server = require("../src/server")

chai.should()

chai.use(chaiHttp)

describe("twitter api", () => {
    it("should fetch 100 tweets by hashtag", (done) => {
        chai.request(server)
            .get("/tweets/dogs")
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a("array")
                response.body.length.should.be.eq(100);
                done()
            })
    })
})