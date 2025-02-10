package HSNcode.api.HSNcode.model;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "BillOfLading")
public class BillOfLading {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "bl_id")
    private Long blId;

    private int userId;

    @ManyToOne
    @JoinColumn(name = "Shipper_ID")
    private ShipperDetails shipper;

    @ManyToOne
    @JoinColumn(name = "Consignee_ID")
    private ConsigneeDetails consignee;

    @ManyToOne
    @JoinColumn(name = "Notify_ID")
    private Notify notify;

    @ManyToOne
    @JoinColumn(name = "Shipment_ID")
    private ShipmentDetails shipment;

    @ManyToOne
    @JoinColumn(name = "Carrier_ID")
    private CarrierDetails carrier;


    public Long getId() {
        return blId ;
    }
}
