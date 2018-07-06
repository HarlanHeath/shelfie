module.exports = {
  showAll: (req, res, next) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .read_products()
      .then(products => res.status(200).send(products))
      .catch(err => {
        res.status(500).send({ errorMessage: "Something has gone wrong!" });
      });
  }
};
