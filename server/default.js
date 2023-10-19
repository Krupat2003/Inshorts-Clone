

import { data } from "./constants/data.js";
import News from './model/new-schema.js';

const DefaultData = async () => {
    try{
        // await News.deleteMany({});
       await News.insertMany(data); //data access
       console.log('Data imported succesfully');
    }catch(error){
        console.log('Error', error.message);

    }
}

export default DefaultData; 