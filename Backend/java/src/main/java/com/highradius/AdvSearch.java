package com.highradius;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/**
 * Servlet implementation class AdvSearch
 */
@WebServlet("/AdvSearch")
public class AdvSearch extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AdvSearch() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
//		response.getWriter().append("Served at: ").append(request.getContextPath());
		response.setHeader("Access-Control-Allow-Origin", "*");
		String doc = request.getParameter("doc_id");
		String cust = request.getParameter("cust_number");
		String invoice = request.getParameter("invoice_id");
		String year = request.getParameter("buisness_year");
		
				
		try
		{
		Connection con=DaoClass.getConnection();
		

		PreparedStatement ps=con.prepareStatement("select * from winter_internship WHERE doc_id = ? AND cust_number = ? AND buisness_year = ? AND invoice_id = ?");
		ps.setString(1, doc);
		ps.setString(2, cust);
		ps.setString(3, year);
		ps.setString(4, invoice);
		System.out.print(ps);
		ResultSet rs=ps.executeQuery();
		List<UserPojo> list=new ArrayList<>();
		
		while(rs.next())
		{
			UserPojo n=new UserPojo();  
            n.setSl_no(rs.getInt(1));  
            n.setBusiness_code(rs.getString(2));  
            n.setCust_number(rs.getString(3));
            n.setClear_date(rs.getString(4));
            n.setBuisness_year(rs.getString(5));
            n.setDoc_id(rs.getString(6));
            n.setPosting_date(rs.getString(7));
            n.setDocument_create_date(rs.getString(8));
            n.setDue_in_date(rs.getString(10));
            n.setInvoice_currency(rs.getString(11));
            n.setDocument_type(rs.getString(12));
            n.setPosting_id(rs.getString(13));
            n.setArea_business(rs.getString(14));
            n.setTotal_open_amount(rs.getString(15));
            n.setBaseline_create_date(rs.getString(16));
            n.setCust_payment_terms(rs.getString(17));
            n.setInvoice_id(rs.getString(18));
            n.setIsOpen(rs.getString(19));
            n.setAging_bucket(rs.getString(20));
            n.setIs_deleted(rs.getString(21));
            n.setName_customer(rs.getString(22));
            list.add(n);
        }
		Gson gson = new Gson();
		String userJSON=gson.toJson(list);
		
		PrintWriter pw = response.getWriter();
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		pw.write(userJSON);
		pw.close();
		
		}
	catch(Exception e) {
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
