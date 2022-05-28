import { app } from './app';

require('dotenv').config();

const port = process.env.PORT || '8044';
app.listen({ port }, () => {
    console.log(`Server ready at http://localhost:${port}`);
});
