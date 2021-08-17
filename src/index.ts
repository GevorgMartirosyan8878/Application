import * as express from "express";
import routes from "./routes/routes";
import crud from "./routes/crud"


const app = express();

app.use(express.json());
app.use('/', routes);
app.use('/users', crud);

app.get('/', (req: any, res: any) => {
    res.send('hello')
})

app.listen(3000, ()=> console.log('http://localhost:3000'))