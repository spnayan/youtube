import axios from 'axios';

const KEY='AIzaSyAf5_RxOm_1Nyt27ND68wpgKyzRnB7dzT8';

export const baseparams={
    
        part:'snippet',
        maxResults:5,
        key:KEY

}

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
   
});