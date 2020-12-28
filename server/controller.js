module.exports = {
    getCars: (req, res) => {
        const db = req.app.get('db');

        db.get_cars().then(cars => {
            res.status(200).send(cars)
        })
    }
}