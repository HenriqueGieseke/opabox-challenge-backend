const orderListController = async (req, res) => {
  const list = req.body;

  const orderedSalaN = list.listas.salaN.sort((a, b) => a - b);
  const orderedSalaS = list.listas.salaS.sort();

  const orderedList = {
    listas: {
      salaN: [...orderedSalaN],
      salaS: [...orderedSalaS],
    },
  };

  res.send(orderedList);
};

export { orderListController };