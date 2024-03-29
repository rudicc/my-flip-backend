"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const orders_status_history_controllers_1 = require("../controllers/orders_status_history.controllers");
const router = (0, express_1.Router)();
router.route('/orders_status_history/getall/').get(orders_status_history_controllers_1.get_orders_status_history_all);
router.route('/orders_status_history/:id').get(orders_status_history_controllers_1.get_orders_status_history_byid);
router.route('/orders_status_history/create/').post(orders_status_history_controllers_1.port_orders_status_history);
router.route('/orders_status_history/put/').put(orders_status_history_controllers_1.put_orders_status_history);
router.route('/orders_status_history/del/').delete(orders_status_history_controllers_1.delete_orders_status_history);
exports.default = router;
