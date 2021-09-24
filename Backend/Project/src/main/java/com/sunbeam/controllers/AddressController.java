package com.sunbeam.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.common.CustomResponse;
import com.sunbeam.entities.Address;
import com.sunbeam.services.AddressService;

@CrossOrigin(origins = "http://localhost:3000",allowCredentials = "true")
@RestController
public class AddressController {

	@Autowired
	private AddressService addressService;
	
	@Autowired
	private CustomResponse response;
	
	@PostMapping("/address")
	public CustomResponse addAddress(@RequestBody Address address) {
		Address address2 = null;
		try {
			address2 = addressService.save(address);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}

		if (address2 != null) {
			response.setStatus("success");
			response.setData(address2);
		} else {
			response.setStatus("error");
			response.setData("");
		}
		return response;
	}
}
