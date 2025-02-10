package HSNcode.api.HSNcode.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "CarrierDetails")
public class CarrierDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int carrierId;

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