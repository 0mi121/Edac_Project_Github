package com.sunbeam.model;

import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserCred {
	@Id
	private int id;
	private String email;
	private String first_name;
	private String last_name;
	private String phone;
}
