package com.highradius;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/**
 * Servlet implementation class EditServ
 */
@WebServlet("/EditServ")
public class EditServ extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public EditServ() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
		response.setHeader("Access-Control-Allow-Origin","*");
		response.setContentType("application/json");
		PrintWriter out = response.getWriter();
//		List<UserPojo> list=new ArrayList<UserPojo>(); 
		try {
			String sl_no= request.getParameter("sl_no");
			String invoice_currency = request.getParameter("invoice_currency");
			String cust_payment_terms = request.getParameter("cust_payment_terms");
			Connection con=DaoClass.getConnection();
			String query = "UPDATE winter_internship set invoice_currency =?, cust_payment_terms =? WHERE sl_no = ?";
			PreparedStatement ps = con.prepareStatement(query);
			ps.setString(1,invoice_currency);
			ps.setString(2, cust_payment_terms);
			ps.setString(3, sl_no);
			ps.executeUpdate();
			UserPojo n=new UserPojo();
			n.setInvoice_currency(invoice_currency);
			n.setCust_payment_terms(cust_payment_terms);
//			list.add(n);
			System.out.println(ps);
//			Gson gson = new Gson();
//			String resData = gson.toJson(list);
//			out.print(resData);
			out.close();
			
		}	
		catch(Exception e)
		{
			e.printStackTrace();
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
