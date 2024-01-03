import express from 'express';
import http from "http"
import { ApolloServer } from '@apollo/server';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { resolvers } from './resolvers/index.js';
import { typeDefs } from './schemas/index.js';
import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws';


const app = express()
const httpServer = http.createServer(app)

const schema = makeExecutableSchema({ typeDefs, resolvers })
const Port = 4000

// create web socket
// const wsServer = new WebSocketServer({
//     server: httpServer,
//     path: '/graphql'
// })
// const serverCleanup = useServer({ schema }, wsServer)



// const server = new ApolloServer({
//     schema, plugins: [
//         ApolloServerPluginDrainHttpServer({ httpServer }), {
//             async serverWillStart() {
//                 return {
//                     async drainServer() {
//                         await serverCleanup.dispose();
//                     },
//                 };
//             },
//         },
//     ]
// })

// await server.start();

const authorizationJWT = async (req, res, next) => {
    console.log({ authorization: req.headers.authorization });
    const authorizationHeader = req.headers.authorization;

    if (authorizationHeader) {
        const accessToken = authorizationHeader.split(' ')[1];

        getAuth()
            .verifyIdToken(accessToken)
            .then((decodedToken) => {
                console.log({ decodedToken });
                res.locals.uid = decodedToken.uid;
                next();
            })
            .catch((err) => {
                console.log({ err });
                return res.status(403).json({ message: 'Forbidden', error: err });
            });
    } else {
        next();
        // return res.status(401).json({ message: 'Unauthorized' });
    }
};

app.use(
    cors(),
    authorizationJWT,
    bodyParser.json(),
    // expressMiddleware(server, {
    //     context: async ({ req, res }) => {
    //         return { uid: res.locals.uid };
    //     },
    // })
);

// mongoose.set('strictQuery', false);
mongoose
    .connect("mongodb://localhost:27017",)
    .then(async () => {
        console.log('Connected to DB');
        // await new Promise((resolve) => httpServer.listen({ port: Port }, resolve));
        console.log('🚀 Server ready at http://localhost:4000');
    });
