import dotenv from 'dotenv';

dotenv.config({ path: '.env'});

const mongoConfig = {
    url: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@cluster0.wdmny9i.mongodb.net/Formacao?retryWrites=true&w=majority`
}

export default mongoConfig;
