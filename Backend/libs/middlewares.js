module.exports = app => {
    app.set('json spaces',4)
    app.set('port', process.env.PORT || 3000);
}