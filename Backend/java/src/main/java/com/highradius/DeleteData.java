package com.highradius;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class DeleteData
 */
@WebServlet("/DeleteData")
public class DeleteData extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public DeleteData() {
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
		try{  
            Connection con=DaoClass.getConnection();  
//            PreparedStatement ps=con.prepareStatement("delete from winter_internship where sl_no=?");  
            // Soft delete through making is_delete column as 1 :) Data important hai vroo
            PreparedStatement ps=con.prepareStatement("UPDATE winter_internship SET is_deleted = 1 WHERE sl_no BETWEEN ? AND ?");  
            String sl_no = request.getParameter("sl_no");
            String[] arrOf_sl_no = sl_no.split(",");
            ps.setString(1, arrOf_sl_no[0]);
            ps.setString(2, arrOf_sl_no[arrOf_sl_no.length - 1]);
            ps.executeUpdate();
            
            
//            ps.executeUpdate();  
            con.close();  
        }catch(Exception e){e.printStackTrace();}  
        
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
