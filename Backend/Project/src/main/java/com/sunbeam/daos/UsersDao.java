package com.sunbeam.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sunbeam.entities.User;

@Repository
public interface UsersDao extends JpaRepository<User,Integer>{
	User findByEmail(String email);
	User findByToken(String token);
	//Users findByName(String name);
    //void add(Users user);
}
