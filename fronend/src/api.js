import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/api/bill-of-lading',
});

export const saveShipperDetails = (data) => api.post('/shipper', data);
export const saveConsigneeDetails = (data) => api.post('/consignee', data);
export const saveNotifyDetails = (data) => api.post('/notify', data);
export const saveShipmentDetails = (data) => api.post('/shipment', data);
export const saveCarrierDetails = (data) => api.post('/carrier', data);
export const generateBillOfLading = (userId, shipperId, consigneeId, notifyId, shipmentId, carrierId) =>
    api.post('/generate', null, { params: { userId, shipperId, consigneeId, notifyId, shipmentId, carrierId } });