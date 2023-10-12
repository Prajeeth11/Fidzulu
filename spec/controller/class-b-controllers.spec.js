const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../app');
const morgan = require('morgan');
const expect = chai.expect;

 

chai.use(chaiHttp);


describe('Main Controller Tests', () => {
    it('should fetch books', async() => {
        let loc = "IN";
        chai.request(app)
            .get('/book/all/' + loc) // Assuming your route is /api/books/:location
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('array');
            });
    });

 

    it('should fetch book team', async() => {
        chai.request(app)
            .get('/book/team')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('array');
            });
    });

 

    it('should fetch dvd', async() => {
        let loc = "IN";
        chai.request(app)

 

            .get('/dvd/all/' + loc)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('array');
            });
    });

 

    it('should fetch dvd team', async() => {
        chai.request(app)
            .get('/dvd/team')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('array'); 
            });
    });

 

    it('should fetch laptop', async() => {
        let loc = "IN";
        chai.request(app)
            .get('/laptop/all/' + loc)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('array');
            });
    });

 

    it('should fetch laptop team', async() => {
        chai.request(app)
            .get('/laptop/team')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('array');
            });
});

});