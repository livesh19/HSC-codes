package HSNcode.api.HSNcode.model;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "Notify")
public class Notify {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int notifyId;

    private String notifyName;
    private String notifyAddress;
    private String notifyEmail;
    private String notifyName1;
    private String notifyAddress1;
    private String notifyEmail1;
    private String notifyName2;
    private String notifyAddress2;
    private String notifyEmail2;
}