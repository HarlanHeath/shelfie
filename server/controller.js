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
    dbInstance
      .delete_product(parseInt(req.params.prod_id))
      .then(res.status(200).send(sim1prod))
      .catch(err => {
        res.status(500).send({ errorMessage: "Something has gone wrong!" });
      });
  }
};
