package com.demo.project79.controller;

import java.security.Principal;
import java.util.Date;

import javax.websocket.server.PathParam;

import com.demo.project79.domain.Customer;
import com.demo.project79.repo.CustomerRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
@Slf4j
@RequiredArgsConstructor
public class HomeController {

    @Autowired
    CustomerRepository customerRepo;

    @GetMapping(value = "/")
    public String home(Model model) {
        Iterable<Customer> customerLst = customerRepo.findAll();
        model.addAttribute("customerLst", customerLst);
        model.addAttribute("serverTime", new Date());
        return "home";
    }

    @PostMapping(value = "/save")
    public String customerSave(@RequestParam(value = "firstName") String firstName, @RequestParam(value = "lastName") String lastName,
                               Model model, RedirectAttributes redirAttrs, Principal principal) {
        log.info("Name: " + firstName);
        Customer customer = new Customer();
        customer.setFirstName(firstName);
        customer.setLastName(lastName);
        customerRepo.save(customer);
        redirAttrs.addFlashAttribute("successMsg", "Successfully added user by: " + principal.getName());
        return "redirect:/";
    }

    @GetMapping(value = "/delete/{id}")
    public String customerSave(@PathVariable Long id, RedirectAttributes redirAttrs, Principal principal) {
        log.info("User {} deleted by {}", id, principal.getName());
        customerRepo.deleteById(id);
        redirAttrs.addFlashAttribute("successMsg", "Deleted user: " + id);
        return "redirect:/";
    }

    @GetMapping(value = "/charts")
    public String chartsHome(Model model) {
        return "charts";
    }

}
