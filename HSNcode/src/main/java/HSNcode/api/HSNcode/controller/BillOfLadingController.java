package HSNcode.api.HSNcode.controller;

import HSNcode.api.HSNcode.model.BillOfLading;
import HSNcode.api.HSNcode.model.BillOfLadingDetails;
import HSNcode.api.HSNcode.model.HSNDetails;
import HSNcode.api.HSNcode.service.HSNService;
import HSNcode.api.HSNcode.service.BillOfLadingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bill-of-lading")
public class BillOfLadingController {
    @Autowired
    private BillOfLadingService billOfLadingService;

    @PostMapping("/details")
    public BillOfLadingDetails saveDetails(@RequestBody BillOfLadingDetails details) {
        return billOfLadingService.saveDetails(details);
    }

    @PostMapping("/generate")
    public BillOfLading generateBillOfLading(@RequestParam int detailsId) {
        return billOfLadingService.generateBillOfLading(detailsId);
    }

    @Autowired
    private HSNService hsndetailsService;

    @GetMapping("/{hsnCode}")
    public List<HSNDetails> getDetailsByHsnCode(@PathVariable String hsnCode) {
        return hsndetailsService.getDetailsByHsnCode(hsnCode);
    }
}