import express from 'express';

const router = express.Router();

router.get('/opa', async (req, res) => {
  res.send(`opa`);
});

export { router as appRoutes };
