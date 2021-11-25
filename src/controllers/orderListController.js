const orderListController = (req, res) => {
  const list = req.body;

  const orderedRoomN = list.listas.salaN.sort((a, b) => a - b);
  const orderedRoomS = list.listas.salaS.sort();

  const orderedList = {
    listas: {
      salaN: [...orderedRoomN],
      salaS: [...orderedRoomS],
    },
  };

  res.send(orderedList);
};

export { orderListController };
