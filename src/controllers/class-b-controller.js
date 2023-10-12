const BookService = require('../services/book-service');
const DVDService = require('../services/dvd-service');
const LaptopsService = require('../services/laptop-service');

 

exports.fetchBook =async (req,res,next)=>{
    try{
        const location = req.params.location;
        const response = await BookService.getBooks(location);
        res.json(response);
    }catch(error){
        res.status(500).json({ error: 'Internal Server Error' });
    }
    
}

 

exports.fetchBookTeam =async (req,res,next)=>{
    try{
        this.teamDetails = await BookService.getBookTeam();
        res.json(this.teamDetails);
    }catch(error){
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

 

exports.fetchDVD =async (req,res,next)=>{
    try{
        const location = req.params.location;
        this.DVD = await DVDService.getDVDs(location);
        res.json(this.DVD);
    }catch(error){
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

 //useless

exports.fetchDVDTeam =async (req,res,next)=>{
    try{
        this.teamDetails = await DVDService.getDVDTeam();
        res.json(this.teamDetails);
    }catch(error){
        res.status(500).json({ error: 'Internal Server Error' });
    }
    
}

 

exports.fetchLaptops =async (req,res,next)=>{
    try{
         const location = req.params.location;
         const response = await LaptopsService.getLaptops(location);
         res.json(response);
    }catch(error){
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

 

exports.fetchLaptopsTeam =async (req,res,next)=>{
    try{
        this.teamDetails = await LaptopsService.getLaptopTeam();
        res.json(this.teamDetails);
    }catch(error){
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

 

exports.get404=(req,res,next)=>{
    res.send("Page does not exist");
}