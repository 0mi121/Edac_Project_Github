package com.sunbeam.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sunbeam.daos.AddressDao;
import com.sunbeam.entities.Address;

@Transactional
@Service
public class AddressServiceImpl implements AddressService{

	@Autowired
	private AddressDao addressDao;
	
	@Override
	public Address save(Address address) {
		return addressDao.save(address);
	}

	/*
	 * @Override
	public User save(User user) {
		return userDao.save(user);
	}*/
}
