package com.highradius;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.*;


public class DaoClass {
	
	 public static Connection getConnection(){  
	        Connection con=null;  
	        try{  
	            Class.forName("com.mysql.cj.jdbc.Driver");  
	            con=DriverManager.getConnection("jdbc:mysql://localhost:3306/grey_goose","root","abhishek");  
	        }catch(Exception e){System.out.println(e);}  
	        return con;  
	    }
	 public static List<UserPojo> getData(){  
	        List<UserPojo> list=new ArrayList<UserPojo>();  
	          
	        try{  
	            Connection con=DaoClass.getConnection();  
	            PreparedStatement ps=con.prepareStatement("select * from winter_internship WHERE is_deleted = 0 LIMIT 0, 200");

//	            PreparedStatement ps=con.prepareStatement("select * from winter_internship");
	            ResultSet rs=ps.executeQuery();  
	            while(rs.next()){  
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
	            con.close();  
	        }catch(Exception e){e.printStackTrace();}  
	        return list;  
	    }

	 public static int delete(int id){  
	        int status=0;  
	        try{  
	            Connection con=DaoClass.getConnection();  
	            PreparedStatement ps=con.prepareStatement("delete from name where id=?");  
	            ps.setInt(1,id);  
	            status=ps.executeUpdate();  
	            con.close();  
	        }catch(Exception e){e.printStackTrace();}  
	          
	        return status;  
	    }
	 public static List<UserPojo> getNameById(int id){  
	         
	        int status =0; 
	        List<UserPojo> list=new ArrayList<UserPojo>(); 
	        try{  
	            Connection con=DaoClass.getConnection();
	            
	    		String query = "SELECT * FROM winter_internship WHERE cust_number LIKE ? LIMIT 100";
	    		PreparedStatement ps = con.prepareStatement(query);
	    		ps.setString(1, "%"+id+"%");
	    		System.out.print(ps);
	    		ResultSet rs=ps.executeQuery();
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
	    		con.close();
	    		}
	    		catch(Exception e)
	    		{
	    			e.printStackTrace();
	    		}
		          	          
	        return list;  
	    }

}
