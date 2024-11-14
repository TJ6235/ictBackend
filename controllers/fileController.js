const projects = require('../models/filemodel')


exports.addfileController = async(req,res)=>{
    console.log('inside filecontroller');
    const userID = req.payload
    console.log(userID);

    const {name,price}=req.body
    console.log(name,price);

    const fileimage = req.file.filename
    console.log(fileimage);

    try {
        const existingfile = await projects.findOne({name:name})
        console.log(existingfile);

        if(existingfile){
            console.log("inside if statement");
            
            res.status(406).json("file already exists")

    
        }else{
            console.log("inside else statement");
            
            const newfile = new projects({
                name,
                price,
                projectImage:projectimage,
                userId:userID
            })
            await newfile.save()
            res.status(200).json(newfile)
        }
    } catch (error) {
        res.status(401).json(error)
    }
    
}

exports.getfilesController = async(req,res)=>{
    try {
        const homefiles = await projects.find()
        res.status(200).json(homefiles)
    } catch (error) {
        res.status(401).json(error)
    }
}

// Controller method to delete a project by ID

exports.deleteProjectController = async (req, res) => {
    const { id } = req.params; 

    try {
        const result = await projects.findByIdAndDelete(id); 

        if (!result) {
            return res.status(404).json({ message: 'Project not found' });
        }

        return res.status(200).json({ message: 'Project deleted successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
};

// Controller method to edit (update) a project by ID

exports.editProjectController = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body; 

    try {
        const result = await projects.findByIdAndUpdate(id, updateData, { new: true, runValidators: true }); 

        if (!result) {
            return res.status(404).json({ message: 'Project not found' });
        }

        return res.status(200).json({ message: 'Project updated successfully', data: result });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
};
