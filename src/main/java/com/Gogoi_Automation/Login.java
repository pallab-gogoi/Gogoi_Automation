package com.Gogoi_Automation;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
public class Login extends HttpServlet{
	public void service(HttpServletRequest req,HttpServletResponse res)throws IOException {
		String username = req.getParameter("username");
		String password = req.getParameter("password");
		
		PrintWriter out = res.getWriter();
		out.println("Username: "+ username);
		out.println("Password: "+ password);
	}
}
