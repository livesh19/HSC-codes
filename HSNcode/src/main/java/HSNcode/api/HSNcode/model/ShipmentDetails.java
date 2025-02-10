package HSNcode.api.HSNcode.model;


import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Data
@Entity
@Table(name = "ShipmentDetails")
public class ShipmentDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int shipmentId;

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
}