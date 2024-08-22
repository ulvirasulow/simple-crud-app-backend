import { Router } from "express";
import { createdProduct, deletedProduct, getAllProducts, getAProduct, updatedProduct } from "../controllers/productController.js";

const productRouter = Router()

productRouter.get('/products', getAllProducts)
productRouter.get('/product/:id', getAProduct)
productRouter.put('/product/:id', updatedProduct)
productRouter.delete('/product/:id', deletedProduct)
productRouter.post('/products', createdProduct)

export default productRouter