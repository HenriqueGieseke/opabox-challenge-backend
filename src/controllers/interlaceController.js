const interlace = async (req, res) => {
  const arraysObj = req.body;

  const interlaceArray = arraysObj.intervaloA.filter((value) =>
    arraysObj.intervaloB.includes(value)
  );

  const interlaced = interlaceArray.length > 0 ? true : false;

  res.send(interlaced);
};

export { interlace };
