module.exports ={
    development: {
        client: 'postgresql',
//        connection: 'postgresql://postgres:postgres@localhost:5432/clase'
        connection: 'postgres://vlvjlsrdnovmqc:28756c3f54c2dac351fa9be966cc80c363ac9003f7a576b56c8367e2e2504bdd@ec2-23-21-244-254.compute-1.amazonaws.com:5432/djj3fcgodjeph'
    },
    
    production:{
        client: 'postgresql',
        connection: process.env.DATABASE_URL + '?ssl=true'
    }
};