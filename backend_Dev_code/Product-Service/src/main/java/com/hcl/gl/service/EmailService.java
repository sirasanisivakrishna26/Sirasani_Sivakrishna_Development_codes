package com.hcl.gl.service;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.mail.SimpleMailMessage;
//import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

//	@Autowired
//	private JavaMailSender mailSender;
	
	public void sendEmail(String to, String sub, String content) {
		
//		//create the message
//		SimpleMailMessage message = new SimpleMailMessage();
//		message.setFrom("capstoneshopforhome@gmail.com");
//		message.setTo(to);
//		message.setText(content);
//		message.setSubject(sub);
//		
//		//send the message
//		mailSender.send(message);
//		System.out.println("Mail sent");
		
	}
	
}
