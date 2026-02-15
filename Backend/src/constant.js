const databaseName = 'Grocery';
const database_url =`mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.vlpgqcy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
export { databaseName, database_url };
