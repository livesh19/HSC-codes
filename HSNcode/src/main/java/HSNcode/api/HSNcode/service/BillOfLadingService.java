package HSNcode.api.HSNcode.service;

import HSNcode.api.HSNcode.model.*;
import HSNcode.api.HSNcode.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class BillOfLadingService {

    private static final Logger logger = LoggerFactory.getLogger(BillOfLadingService.class);

    @Autowired
    private ShipperDetailsRepository shipperDetailsRepository;

    @Autowired
    private ConsigneeDetailsRepository consigneeDetailsRepository;

    @Autowired
    private NotifyRepository notifyRepository;

    @Autowired
    private ShipmentDetailsRepository shipmentDetailsRepository;

    @Autowired
    private CarrierDetailsRepository carrierDetailsRepository;

    @Autowired
    private BillOfLadingRepository billOfLadingRepository;

    public ShipperDetails saveShipperDetails(ShipperDetails shipperDetails) {
        return shipperDetailsRepository.save(shipperDetails);
    }

    public ConsigneeDetails saveConsigneeDetails(ConsigneeDetails consigneeDetails) {
        return consigneeDetailsRepository.save(consigneeDetails);
    }

    public Notify saveNotifyDetails(Notify notify) {
        return notifyRepository.save(notify);
    }

    public ShipmentDetails saveShipmentDetails(ShipmentDetails shipmentDetails) {
        return shipmentDetailsRepository.save(shipmentDetails);
    }

    public CarrierDetails saveCarrierDetails(CarrierDetails carrierDetails) {
        return carrierDetailsRepository.save(carrierDetails);
    }

    @Transactional
    public BillOfLading generateBillOfLading(int userId, int shipperId, int consigneeId, int notifyId, int shipmentId, int carrierId) {
        logger.info("Generating Bill of Lading for User ID: {}", userId);

        BillOfLading billOfLading = new BillOfLading();
        billOfLading.setUserId(userId);

        billOfLading.setShipper(shipperDetailsRepository.findById(shipperId)
                .orElseThrow(() -> new RuntimeException("Shipper not found with ID: " + shipperId)));

        billOfLading.setConsignee(consigneeDetailsRepository.findById(consigneeId)
                .orElseThrow(() -> new RuntimeException("Consignee not found with ID: " + consigneeId)));

        billOfLading.setNotify(notifyRepository.findById(notifyId)
                .orElseThrow(() -> new RuntimeException("Notify Party not found with ID: " + notifyId)));

        billOfLading.setShipment(shipmentDetailsRepository.findById(shipmentId)
                .orElseThrow(() -> new RuntimeException("Shipment not found with ID: " + shipmentId)));

        billOfLading.setCarrier(carrierDetailsRepository.findById(carrierId)
                .orElseThrow(() -> new RuntimeException("Carrier not found with ID: " + carrierId)));

        BillOfLading savedBill = billOfLadingRepository.save(billOfLading);
        logger.info("Bill of Lading successfully generated with ID: {}", savedBill.getId());

        return savedBill;
    }
}
