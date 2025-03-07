package com.shoopingApp;

public class Shopping {
	
	

	double electricalGst(int ele1 , int ele2) {
		
		
		double totalele  = (ele1 + ele2) * 0.18 ;
		
	 
		return totalele;
	}
	
	double foodGst(int f1 , int f2) {
		
		double foodgst = (f1+ f2 )* 0.08;
		return foodgst;
	}
	
	double colthingGst(int c1) {
		
		double colthinggst = c1 * 0.18;
		return colthinggst;
	}
	
	double totalBill() {
		
		double  total = electricalGst( ele1 ,  ele2) + foodGst( f1 , f2)+colthingGst( c1);
		
		return total;
	}
	
	public  double discountBill(int ele1 , int ele2,int f1 , int f2 ,int c1){
		
		double totalgstbill = totalBill( ) ;
		
		double disBill = totalBill( )  * 0.20;
		
		 double finalBill = totalgstbill - disBill;
		 
		 return finalBill;
		 
		
		 
		
	 
	}
	 
	 
	
	
}
