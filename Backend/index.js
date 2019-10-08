import express from 'express';
import consign from 'consign';

const app = express();
app.use(express.json({ limit: '50mb' }));
    app.use(express.urlencoded({ limit: '50mb' }));
consign()
.include('libs/middlewares.js')
.then('routes')
.include('libs/boots.js')
.into(app);

