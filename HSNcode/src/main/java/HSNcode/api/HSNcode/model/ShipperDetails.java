package HSNcode.api.HSNcode.model;

import jakarta.persistence.*;
import lombok.Getter;

@Getter
@Entity
@Table(name = "shipper_details")
public class ShipperDetails {

    // Getters and Setters
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "shipper_id")
    private Long shipperId;

    @Column(name = "shipperfname")
    private String shipperfname;

    @Column(name = "shipperlname")
    private String shipperlname;

    @Column(name = "shipper_address1")
    private String shipperAddress1;

    @Column(name = "shipper_address2")
    private String shipperAddress2;

    @Column(name = "shipper_city")
    private String shipperCity;

    @Column(name = "shipper_state")
    private String shipperState;

    @Column(name = "shipper_country")
    private String shipperCountry;

    @Column(name = "shipper_email")
    private String shipperEmail;

    @Column(name = "shipper_phone")
    private String shipperPhone;

    @Column(name = "shippercin")
    private String shipperCIN;

    @Column(name = "shipperuoeno")
    private String shipperUOENo;

    public void setShipperId(Long shipperId) {
        this.shipperId = shipperId;
    }

    public void setShipperfname(String shipperfname) {
        this.shipperfname = shipperfname;
    }

    public void setShipperlname(String shipperlname) {
        this.shipperlname = shipperlname;
    }

    public void setShipperAddress1(String shipperAddress1) {
        this.shipperAddress1 = shipperAddress1;
    }

    public void setShipperAddress2(String shipperAddress2) {
        this.shipperAddress2 = shipperAddress2;
    }

    public void setShipperCity(String shipperCity) {
        this.shipperCity = shipperCity;
    }

    public void setShipperState(String shipperState) {
        this.shipperState = shipperState;
    }

    public void setShipperCountry(String shipperCountry) {
        this.shipperCountry = shipperCountry;
    }

    public void setShipperEmail(String shipperEmail) {
        this.shipperEmail = shipperEmail;
    }

    public void setShipperPhone(String shipperPhone) {
        this.shipperPhone = shipperPhone;
    }

    public void setShipperCIN(String shipperCIN) {
        this.shipperCIN = shipperCIN;
    }

    public void setShipperUOENo(String shipperUOENo) {
        this.shipperUOENo = shipperUOENo;
    }
}
