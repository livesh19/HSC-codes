package HSNcode.api.HSNcode.model;
import jakarta.persistence.*;
import lombok.Data;
import java.util.Date;

@Data
@Entity
@Table(name = "BillOfLadingDetails")
public class BillOfLadingDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    // Shipper Details
    private String shipperFName;
    private String shipperLName;
    private String shipperAddress1;
    private String shipperAddress2;
    private String shipperCity;
    private String shipperState;
    private String shipperCountry;
    private String shipperEmail;
    private String shipperPhone;
    private String shipperCIN;
    private String shipperUOENo;

    // Consignee Details
    private String consigneeFName;
    private String consigneeLName;
    private String consigneeAddress1;
    private String consigneeAddress2;
    private String consigneeCity;
    private String consigneeState;
    private String consigneeCountry;
    private String consigneeEmail;
    private String consigneePhone;
    private String consigneeRegNo;
    private String consigneeTINNo;

    // Notify Details
    private String notifyName;
    private String notifyAddress;
    private String notifyEmail;
    private String notifyName1;
    private String notifyAddress1;
    private String notifyEmail1;
    private String notifyName2;
    private String notifyAddress2;
    private String notifyEmail2;

    // Shipment Details
    private String shipmentOrigin;
    private String shipmentDestination;
    private String shipmentContainerDetails;
    private String shipmentGoodsDesc;
    private String shipmentTotalBags;
    private String shipmentNetWeight;
    private String shipmentGrossWeight;
    private String shipmentHSCode;
    private Date shipmentOnBoardDate;
    private String shipmentSBNo;
    private String shipmentCargoStatus;

    // Carrier Details
    private String carrierFName;
    private String carrierLName;
    private String carrierAddress1;
    private String carrierAddress2;
    private String carrierCity;
    private String carrierState;
    private String carrierCountry;
    private String carrierEmail;
    private String carrierPhone;
}
