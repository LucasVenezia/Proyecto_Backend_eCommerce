const { Router } = require('express');
const { getAll, getById, add, update, deleteById } = require('../managers/productManager');
const adminAuth = require('../middlewares/adminAuth.js');

const router = Router();

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', adminAuth, add);
router.put('/:id', adminAuth, update);
router.delete('/:id', adminAuth, deleteById);

module.exports = router;