import axios from "axios";


const fetchInfo = async () => {
    try {
        const info = await axios.get('https://fly.sportsdata.io/v3/mma/scores/json/Event/185?key=4bf67b31c64140bca693f4741f8cd713');
        console.log(info);
    } catch (error) {
        console.log(error);
    }
}

export const eventStats = () => fetchInfo();
