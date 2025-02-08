package HSNcode.api.HSNcode.service;

import HSNcode.api.HSNcode.model.HSNDetails;
import HSNcode.api.HSNcode.repository.HSNRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HSNService {

    @Autowired
    private HSNRepository hsnRepository;

    public HSNDetails getDetailsByHSNCode(String hsnCode) {
        System.out.println("Fetching details for HSN Code: " + hsnCode);
        List<HSNDetails> hsnDetailsList = hsnRepository.findByHsnCode(hsnCode);

        if (!hsnDetailsList.isEmpty()) {
            return hsnDetailsList.get(0);  // Return the first matching result
        }

        throw new EntityNotFoundException("HSN Code not found: " + hsnCode);
    }
}