package HSNcode.api.HSNcode.service;


import HSNcode.api.HSNcode.model.BillOfLading;
import HSNcode.api.HSNcode.model.BillOfLadingDetails;
import HSNcode.api.HSNcode.repository.BillOfLadingDetailsRepository;
import HSNcode.api.HSNcode.repository.BillOfLadingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BillOfLadingService {
    @Autowired
    private BillOfLadingDetailsRepository detailsRepository;

    @Autowired
    private BillOfLadingRepository billOfLadingRepository;

    public BillOfLadingDetails saveDetails(BillOfLadingDetails details) {
        return detailsRepository.save(details);
    }

    public BillOfLading generateBillOfLading(int detailsId) {
        BillOfLadingDetails details = detailsRepository.findById(detailsId).orElseThrow();
        BillOfLading billOfLading = new BillOfLading();
        billOfLading.setDetails(details);
        return billOfLadingRepository.save(billOfLading);
    }
}