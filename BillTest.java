package com.shoopingApp;

public class BillTest {

	public static void main(String[] args) {
		
		Shopping s = new Shopping();
		
		
		s.discountBill(100, 100,100 , 100 , 100 );
		
		System.out.println("Total Bill (before discount) : " +s.totalBill() );
		System.out.println("Discount Applied (20%) : "  );
		System.out.println("_____________________________________");
		System.out.println("Final Bill (after discount): "   );
		
	}


	
	
}
