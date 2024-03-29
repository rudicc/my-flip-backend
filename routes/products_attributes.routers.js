"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_attributes_controllers_1 = require("../controllers/products_attributes.controllers");
const router = (0, express_1.Router)();
router.route('/products_attributes/getall/').get(products_attributes_controllers_1.get_products_attributes_all);
router.route('/products_attributes/:id').get(products_attributes_controllers_1.get_products_attributes_byid);
router.route('/products_attributes/create/').post(products_attributes_controllers_1.port_products_attributes);
router.route('/products_attributes/put/').put(products_attributes_controllers_1.put_products_attributes);
router.route('/products_attributes/del/').delete(products_attributes_controllers_1.delete_products_attributes);
exports.default = router;
