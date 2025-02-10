package HSNcode.api.HSNcode.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "ConsigneeDetails")
public class ConsigneeDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int consigneeId;

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
}