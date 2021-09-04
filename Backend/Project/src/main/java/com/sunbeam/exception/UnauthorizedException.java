package com.sunbeam.exception;

public class UnauthorizedException extends Exception{
	
	private static final long serialVersionUID = 8077374152349102561L;

	public UnauthorizedException(String message) {
		System.out.println(message);
	}
}
