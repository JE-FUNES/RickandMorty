const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {

    try {
        const {data} = await axios.get(`${URL}`);
        const newChar = data.results.map((char) => ({
            name: char.name,
            status: char.status,
            id: char.id,

    }));
    return res.status(200).json(newChar);
} catch (error) {
    throw res.status(500).json({ error: error.message }); //jamas poner return en chatch!!!!
}};




module.exports = {getCharById};