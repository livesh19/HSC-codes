package HSNcode.api.HSNcode.model;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "BillOfLading")
public class BillOfLading {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int billOfLadingId;

    @ManyToOne
    @JoinColumn(name = "Details_ID")
    private BillOfLadingDetails details;
}