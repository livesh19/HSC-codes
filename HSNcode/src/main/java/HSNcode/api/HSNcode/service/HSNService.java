package HSNcode.api.HSNcode.service;

import HSNcode.api.HSNcode.model.HSNDetails;
import HSNcode.api.HSNcode.repository.HSNRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HSNService {

    @Autowired
    private HSNRepository hsndetailsRepository;

    public List<HSNDetails> getDetailsByHsnCode(String hsnCode) {
        return hsndetailsRepository.findByHsnCode(hsnCode);
    }
}