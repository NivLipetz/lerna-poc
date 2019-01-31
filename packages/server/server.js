const reporterRoutes = require('reporter/routes/healthRoute');
const schedulerRoutes = require('scheduler/routes/healthRoute');

const express = require('express');

const app = express();

app.use(reporterRoutes);
app.use(schedulerRoutes);
app.listen(8080);
