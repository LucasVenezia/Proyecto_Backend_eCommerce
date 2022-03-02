const { Router } = require('express');
const { add, deleteById, getProducts, addProduct, deleteProduct } = require('../managers/cartManager');

const router = Router();

router.post('/', add);
router.delete('/:id', deleteById);
router.get('/:id/productos', getProducts);
router.post('/:id/productos/:product_id', addProduct);
router.delete('/:id/productos/:product_id', deleteProduct);

module.exports = router;