import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';
import { createConnection } from 'typeorm';
import { schema } from './Schema/schema';
import { Users } from './Entities/Users';
import { Products } from './Entities/Products';


const server = async () => {

  await createConnection({
    type: "mysql",
    database: "graphqlcrud",
    username: "root",
    password: "12345",
    logging: true,
    synchronize: false,
    entities: [Users, Products]
  })

  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
  }))

  app.listen(3050, () => console.log(`App is listening on port 3050`));
};

server().catch((err) => console.log(err));