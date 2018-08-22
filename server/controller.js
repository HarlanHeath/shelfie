module.exports = {
  showAll: (req, res, next) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .read_products()
      .then(sim1prod => res.status(200).send(sim1prod))
      .catch(err => {
        res.status(500).send({ errorMessage: "Something has gone wrong!" });
      });
  },

  delete: (req, res, next) => {
    const dbInstance = req.app.get("db");

    dbInstance;
    console
      .log(req.params.id)
      .delete_product(req.params.id)
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => {
        res.status(500).send({ errorMessage: "Something has gone wrong!" });
      });
  }
};
