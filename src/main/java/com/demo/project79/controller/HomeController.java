package com.demo.project79.controller;

import java.util.Date;

import com.demo.project79.domain.Customer;
import com.demo.project79.repo.CustomerRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@Slf4j
@RequiredArgsConstructor
public class HomeController {

    @Autowired
    CustomerRepository customerRepo;

    @GetMapping(value = "/")
    public String customerHome(Model model) {

        Iterable<Customer> customerLst = customerRepo.findAll();
        model.addAttribute("customerLst", customerLst);
        model.addAttribute("serverTime", new Date());
        return "home";
    }

    @PostMapping(value = "/")
    public String customerSave(@RequestParam(value = "firstName") String firstName, @RequestParam(value = "lastName") String lastName, Model model) {
        log.info("Name: " + firstName);
        Customer customer = new Customer();
        customer.setFirstName(firstName);
        customer.setLastName(lastName);
        customerRepo.save(customer);
        return "redirect:/";
    }

    @GetMapping(value = "/charts")
    public String chartsHome(Model model) {
        return "charts";
    }

}
