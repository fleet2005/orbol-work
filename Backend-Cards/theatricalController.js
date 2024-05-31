const Theatrical = require('./models/schematwo');

// Retrieve all states
exports.getAllStates = async (req, res) => {
    try {
        const states = await Theatrical.distinct('state');
        res.status(200).json(states);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Retrieve all cities by state name
exports.getCitiesByState = async (req, res) => {
    try {
        const { state } = req.params;
        const cities = await Theatrical.find({ state }).distinct('city');
        res.status(200).json(cities);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Retrieve all malls by city name
exports.getMallsByCity = async (req, res) => {
    try {
        const { city } = req.params;
        const malls = await Theatrical.find({ city }).distinct('mall');
        res.status(200).json(malls);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update fields by state name
exports.updateByState = async (req, res) => {
    try {
        const { state } = req.params;
        const updatedData = req.body;
        await Theatrical.updateMany({ state }, updatedData);
        res.status(200).json({ message: 'Records updated successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update fields by city name
exports.updateByCity = async (req, res) => {
    try {
        const { city } = req.params;
        const updatedData = req.body;
        await Theatrical.updateMany({ city }, updatedData);
        res.status(200).json({ message: 'Records updated successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update fields by mall name
exports.updateByMall = async (req, res) => {
    try {
        const { mall } = req.params;
        const updatedData = req.body;
        await Theatrical.updateMany({ mall }, updatedData);
        res.status(200).json({ message: 'Records updated successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete by state name
exports.deleteByState = async (req, res) => {
    try {
        const { state } = req.params;
        await Theatrical.deleteMany({ state });
        res.status(200).json({ message: 'Records deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete by city name
exports.deleteByCity = async (req, res) => {
    try {
        const { city } = req.params;
        await Theatrical.deleteMany({ city });
        res.status(200).json({ message: 'Records deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete by mall name
exports.deleteByMall = async (req, res) => {
    try {
        const { mall } = req.params;
        await Theatrical.deleteMany({ mall });
        res.status(200).json({ message: 'Records deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add a new theatrical entry
exports.addTheatricalEntry = async (req, res) => {
    try {
        const newEntry = new Theatrical(req.body);
        await newEntry.save();
        res.status(201).json({ message: 'Entry added successfully', data: newEntry });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
