package HSNcode.api.HSNcode.controller;



import HSNcode.api.HSNcode.model.*;
import HSNcode.api.HSNcode.service.BillOfLadingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/bill-of-lading")
public class BillOfLadingController {
    @Autowired
    private BillOfLadingService billOfLadingService;

    @PostMapping("/shipper")
    public ShipperDetails saveShipperDetails(@RequestBody ShipperDetails shipperDetails) {
        System.out.println("Received shipper details: " + shipperDetails);
        return billOfLadingService.saveShipperDetails(shipperDetails);
    }

    @PostMapping("/consignee")
    public ConsigneeDetails saveConsigneeDetails(@RequestBody ConsigneeDetails consigneeDetails) {
        return billOfLadingService.saveConsigneeDetails(consigneeDetails);
    }

    @PostMapping("/notify")
    public Notify saveNotifyDetails(@RequestBody Notify notify) {
        return billOfLadingService.saveNotifyDetails(notify);
    }

    @PostMapping("/shipment")
    public ShipmentDetails saveShipmentDetails(@RequestBody ShipmentDetails shipmentDetails) {
        return billOfLadingService.saveShipmentDetails(shipmentDetails);
    }

    @PostMapping("/carrier")
    public CarrierDetails saveCarrierDetails(@RequestBody CarrierDetails carrierDetails) {
        return billOfLadingService.saveCarrierDetails(carrierDetails);
    }

    @PostMapping("/generate")
    public BillOfLading generateBillOfLading(
            @RequestParam int userId,
            @RequestParam int shipperId,
            @RequestParam int consigneeId,
            @RequestParam int notifyId,
            @RequestParam int shipmentId,
            @RequestParam int carrierId
    ) {
        return billOfLadingService.generateBillOfLading(userId, shipperId, consigneeId, notifyId, shipmentId, carrierId);
    }
}