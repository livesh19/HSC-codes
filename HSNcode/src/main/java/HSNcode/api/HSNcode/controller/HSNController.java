package HSNcode.api.HSNcode.controller;

import HSNcode.api.HSNcode.model.HSNDetails;
import HSNcode.api.HSNcode.service.HSNService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/hsn")
public class HSNController {

    @Autowired
    private HSNService hsndetailsService;

    @GetMapping("/{hsnCode}")
    public List<HSNDetails> getDetailsByHsnCode(@PathVariable String hsnCode) {
        return hsndetailsService.getDetailsByHsnCode(hsnCode);
    }
}