package HSNcode.api.HSNcode.controller;

import HSNcode.api.HSNcode.model.HSNDetails;
import HSNcode.api.HSNcode.service.HSNService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/hsn")
public class HSNController {

    @Autowired
    private HSNService hsnService;

    @GetMapping("/{hsnCode}")
    public HSNDetails getHSNDetails(@PathVariable String hsnCode) {
        System.out.println("Received HSN Code: " + hsnCode);
        return hsnService.getDetailsByHSNCode(hsnCode);
    }
}