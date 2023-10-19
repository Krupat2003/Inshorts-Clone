import mongoose from 'mongoose';

const Connection = async (username, password) => {

    const URL =`mongodb://${username}:${password}@ac-zex0216-shard-00-00.lr90jd5.mongodb.net:27017,ac-zex0216-shard-00-01.lr90jd5.mongodb.net:27017,ac-zex0216-shard-00-02.lr90jd5.mongodb.net:27017/clone-inshorts?ssl=true&replicaSet=atlas-6cplmm-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try{
       await mongoose.connect(URL, { useNewUrlParser: true});
       console.log('Database connected sucessfully');
    }catch(error){
        console.log('Error while connecting with the database', error);
    }
}

export default Connection;

