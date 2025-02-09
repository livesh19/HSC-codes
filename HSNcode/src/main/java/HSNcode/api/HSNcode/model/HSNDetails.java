package HSNcode.api.HSNcode.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class HSNDetails {
    @Id
    private String item_code;
    private String item_name;
    private String item_type;
    private int gst_percentage;
    @Column(name = "hsn_code")
    private String hsnCode; // Ensure this matches the database column name
    private String gst_value;

    // Getters and Setters
    public String getItem_code() {
        return item_code;
    }

    public void setItem_code(String item_code) {
        this.item_code = item_code;
    }

    public String getItem_name() {
        return item_name;
    }

    public void setItem_name(String item_name) {
        this.item_name = item_name;
    }

    public String getItem_type() {
        return item_type;
    }

    public void setItem_type(String item_type) {
        this.item_type = item_type;
    }

    public int getGst_percentage() {
        return gst_percentage;
    }

    public void setGst_percentage(int gst_percentage) {
        this.gst_percentage = gst_percentage;
    }

    public String getHsn_code() {
        return hsnCode;
    }

    public void setHsn_code(String hsn_code) {
        this.hsnCode = hsnCode;
    }

    public String getGst_value() {
        return gst_value;
    }

    public void setGst_value(String gst_value) {
        this.gst_value = gst_value;
    }
}