package HSNcode.api.HSNcode.repository;

import HSNcode.api.HSNcode.model.HSNDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface HSNRepository extends JpaRepository<HSNDetails, String> {
    @Query("SELECT h FROM HSNDetails h WHERE TRIM(h.hsnCode) = TRIM(:hsnCode)")
    List<HSNDetails> findByHsnCode(@Param("hsnCode") String hsnCode);
}