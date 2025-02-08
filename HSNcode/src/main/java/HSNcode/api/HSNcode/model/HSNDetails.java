package HSNcode.api.HSNcode.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "HSNDetails")
public class HSNDetails {
    @Id
    @Column(name = "item_code")
    private String itemCode;

    @Column(name = "item_name")
    private String itemName;

    @Column(name = "item_type")
    private String itemType;

    @Column(name = "gst_percentage")
    private int gstPercentage;

    @Column(name = "hsn_code")
    private String hsnCode;

    @Column(name = "gst_rate")
    private String gstRate;

    // Getters and Setters
}