package com.sunbeam.dtos;

import org.springframework.beans.BeanUtils;

import com.sunbeam.entities.User;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {
	private int id;
	private String email;
	private String password;
	private String first_name;
	private String last_name;
	private String phone;
	private int roleid;
	
	public static UserDto fromEntity(User user) {
		UserDto dto = new UserDto();
		BeanUtils.copyProperties(user, dto);
		dto.setId(user.getId());
		return dto;
	}
	
	// called from POST, PUT
	public static User toEntity(UserDto dto) {
		User user = new User();
		BeanUtils.copyProperties(dto, user);
		user.setId(dto.getId());
		return user;
	}

	@Override
	public String toString() {
		return "UserDto [id=" + id + ", email=" + email + ", password=" + password + ", first_name=" + first_name
				+ ", last_name=" + last_name + ", phone=" + phone + ", roleid=" + roleid + "]";
	}
	
	
}
