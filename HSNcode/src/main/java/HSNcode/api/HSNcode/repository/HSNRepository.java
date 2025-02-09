package HSNcode.api.HSNcode.repository;

import HSNcode.api.HSNcode.model.HSNDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface HSNRepository extends JpaRepository<HSNDetails, String> {
    List<HSNDetails> findByHsnCode(String hsnCode);
}