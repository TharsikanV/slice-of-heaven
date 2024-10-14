const app=require('./app');
const connectDatabase=require('./config/database');


const PORT=process.env.PORT || 8080;
connectDatabase().then(()=>{
    server=app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
        
    })
}   
).catch(err=>{
    console.error('Error connecting to the database',err);
    process.exit(1);
 
});
