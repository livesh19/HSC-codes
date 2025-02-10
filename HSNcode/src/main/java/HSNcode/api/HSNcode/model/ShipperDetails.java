package HSNcode.api.HSNcode.model;


import jakarta.persistence.*;

@Entity
@Table(name = "shipper_details")
public class ShipperDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long shipperId;

    @Column(name = "shipperfname")
    private String shipperFName;

    @Column(name = "shipperlname")
    private String shipperLName;

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
    private String shipperUOE;

    // Getters and setters
}