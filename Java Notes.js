*******************************************27th Jan

- $ Variable $

- Class lavel varbale  or static variable:-

 - before variable "static" is their then it is class level variable.

   ex:- class Student {
          int id;              --> three are intanse variable
          String name;   --> three are intanse variable
           String course;  --> three are intanse variable
           static String resultdate;  --> class level variable
          }  

 - for instance varibel can able to create two or more copy but for class level varibale or static variable  unable to create the copy 
 - instance varibale only create when object are created 
 - without object we can able to use the static variable so that we can save the memory.
 - instance variable have the different value for different object as well for different varibale  and must have the value.
 - But static varibale have same value for different object and able to create only one copy
 - static variable is not depend on object 
 - intanse variable is depend on object
 - we can use the static varible through the copy object.
    Client m1 = new Client();
	
	System.out.println(m1.maxmarks);
	
 - static variable memoryis create on hip after java 1.8    before 1.8 memory is created in method area
 - Static variable has same memory for different method  and changes has been happen in the same memory
 - Declare the static vatibale by its class name (best pratice) 
 - Java is a object orirented language 
 - deposite and withdraw is a instance method 
 - TO align the code (formating the code) use ctlr +i or ctlr+f
 
 **************************************************4 Feb
 
 What is Java?
 - In develompent software we faces issue like security, execution time, performance , memory mgt etc.  Java address all these issues
 - java is application proogramming language designed to serve the need of enterprise application 
 - Java is OO (Object Oriented)programing language design to create missio critical application
 - java is object orienteed, platform independed language design to create mission critical aaplication. It offers feature like memory mgt, Reliability,....
 - Object Oriented  means the language follow the hoops concept (Encapsulation , Inheritance , Polymorphism, Abstraction)
 - Which can run on any device is paltform independance 
 - If method not give the return to the caller then it is void  || void means empty.
 
 
		void greet(String s) {
				system.out.println(s.toupperCase());
			}
 
 
 - Memeory Management :- It is creation of object and Distruction of the object. But the java gives the object the gives the memory  for coding, if no one can use the object the java can delete the object.
 - This object which is not in use  it is reomve this happen by" Garbage collector ".
 - local variable is not able to access outside the method 
 
			void ma(){
				int c= 10;    --> local variable 
			}
			
- To take the object from one class to another class by inheritance using the " extends" keyword in class statement between the two classes. 

		public class B extends A{
			
			int q=30;
		}
		
		here A is a parent class && B is child class
		
		
- to access the parent class variable use the "super" keyword in syso.

		syso(super.t);
		
- to access the varibale from the currentrent class outside the method use the "this " keyword in syso.

		syso(this.t);
		
    why we use super and this in syso, if the varibale name is same in two different class.

- local variable are in inside the method, outside the method is instance varibale && if write as static then it is static varibale.
- Ability to communicate different platform is called interoperability.

***************************************************5 Feb

***************************************************6 Feb
- constructor

- Automatically constructor can not add

- To create constructor  the class name and constructor name is same.

- In constructor return type  is not their.

- If constructor is not add to class then java defaulty create a constructor as well super keyword

- 


*************************************************10 Feb

- fIRST 1 hour 

- Constructor has been written as 

     Account (){
		 Super();
	 }
	 
- Construction does not have the return statement because it only create 

------- OPERATORS ------

1. Increment snd Decrement operatores

- pre Increment use as ++a here increment the value then use the Variable
- Post Increment use as a++ here use the variable then increment the value 

- pre decremenet use as --a here decrement the value the use the variable
- post decremenet use as a-- here use the variable then decrement the value

------- Arithmetic operatores ---------

- Have 5 type of Arithmetic operator   + ,- ,* ,/ ,%(mod)
 
- % (mod) will give the reminder

----------- Relational Operator------

-   < (less than equal to), > (greater than), <= (lees than equal to ), >= (greater than equal to), == (equal to) , != (not equal to)
- Result give in boolean
------------Logical operator  ----------------

 - && (and ), || (or) , ! (not)
 
------------Assigmnent operator----------------

-  =, += , -= , *= , /= , %=


*********************************************11 Feb

-----Iterator----------

- If we can to do repeatedly then we use the Iterator.

- for(condition){            ->>> for Loop
	syso
}

- ex: - for(int i=1; i<=25;++i){
	syso(i);
}


 2.	for(int 1=10;i<=50; i=i+10){
		
		syso(i)
		}
		
 3. Print f dollar sign
 
 for (int i=1 ; i<=5; ++1){
	 syso("$")
 }
 *************************************13 Feb
 Debug of code
 
 **************************************14 Feb
 
 ---------------Array------------
 
-Array of index start from 0

- Single directional array a[]= {23,45,6,78,9,65};

-Array is a contieous memory allocation of a given data

- Two Dimesional array
   
    int a[][]= new int [3] [3];  ---- Array of array 
						this are size of array 
						
						total size of array is 3*3 = 9
						
						
					
					
					
					
	***********String ***********

- if string create with new keyword then the copy of string create in heap as well in SCP(String constants pool)
- In scp content is not repeated


	 ex:- String s1 = new String ("Hello");
	 
- the copy of string of same value is not save in  SCP 	 
	
	
- if we not use the new keyword then the copy not create in heap but the memory create in scp

while comapre the both string (s1 == s2 )gives the false response, if 

we use equals method then gives the true response ( s1 .equals (s2)); 

equals compare the content of the string 



- if only comapre the character to ignore the case sensentive then use (s1.equalsIgnoreCase(s2));

- Existing string object can not be change 
- String are immutable objects in Java, which is not changes

		String s1 =new String ("ankit");
		String s2 = new String ("sharma");
		s1 =s1+s2;
		
		here three string are created   1st for ankit  , 2nd for sharma ,  and third string is created ankit sharma 
		
		becz exisiting string can not be change
		

- String is a memory efficient
- 	To mutable string by " StringBuffer "  and "StringBuilder"  -->> can able to change the Existing string

StringBuilder  sc = new StringBuilder("hello");
StringBuffer  sc = new StringBuffer("hello");

 - string and StringBuffer and StringBuilder are char seqeunce 
 
 - StringBuffer are threadsafe  mutable only one thread can access the string   && relaibility over the performance

- StringBuilder are treadsafe mutable  multiple thread can access the string  && It faster than Buffer


***** String Class Methods******

- equals , concat, split, equalsIgonreCase , toUpperCase , toLowerCase , charAt , toCharArray

*************************18 feb Pratice session
*************************19  feb holiday
*************************20 Feb pratice session
- Swapping


**************************21 feb handson string
- to take input from system theen use the scanner class

	Scanner sc = new Scanner(System.in);

- to split String into array by .split();

- use the "continue" keyword for to go again into the loop

*********************25 Feb
OverLoading and overriding



**********************26 Feb 

Encapsulation

- in java having 4 Access Sepcifier  also called as visibility modes

Q. Why we use the access sepcififer?
Ans: As per the requirement how much have to access b other  

1. private 
2. default (no access)
3. protected
4. public

- Defines the access

- if access specifier is not define then it is default means can access the same package & can't access the class outside the package 
- private specidfier only accessable within class
- protected specidfier can access within same package + subclass outside package (by using the extends as a child) 
- public can access the project

    private int w;
	protected int y;
	public int z;
	int x;
	
- Acess specifier can able to apply for class, varibale, and method.

OOPS concept
- Encapsulation

*********Geeter and Sheeter*************

- Geeter is use to see the see the variable in other class if variable is private
  private double balance;
  
  public double getBalance(){      // here varaible initial
		return balance;
	}
	
	Here can able to see the balance(Variable) in other class 
	
	
- if we need to change the balance amount or add the balance amount(changes in variable in other class)eventhough variable is private then use the Sheeter to access in other Class
	
	public void setBalance(double balance){        // here varaible initial write capital
		if (balance >0)
		this.balance = this.balance +balance;
	}
	Here with the condition  balance variable will be change in other class.


Note :- Variable name always be in small letter and same variblename use in method write initial capital  
	
- Sheeter Geeter is used for Private Access specifier

- Encpasulated class :- using access specifier while writing the intance variable  

Q. What is Encapsulation?
Ans: It is use to achieve data hiding (Variable). By using as a private 

Q. What do we mean by proper Encapsulated Class
Ans: Binding of related data and behaviour into single unit (Class)are proper Encapsulated classes

Best Pratices : - 

It make all instance variable Private
And access then vis seeter and geeter method 

Shortcut to use geeter and sheeter by :- 
source --> Generate geeter and sheeter


*****************27 Feb
Inheritance
- concept of aquiring all the non-Private properties of parent [super] class to child [sub] Class
- code reusability [reduce developer effort]
- How? by using extends keyowords between child & parent class

- types : Single, multi-level, hirarchical, multiple,hybird

- in java in casa of class multiple and hybird inhertaince are not allowed.

- ClassA --> ClassB(extends A)  :- single Inheritance
- ClassA --> ClassB(extends A) --> ClassC(extends C) :- multi-level inheritance
- ClassA --> ClassB (extends A) --> ClassC(extendsA)       :- Hirarchical inheritance
		ClassB--> ClassD (extends B) --> ClassE(extends B)
  Here super parent is A for ClassD and ClassE
  
-  ClassA --> ClassB (extendsA)
								--> ClassD (extends )
		  --> ClassC (extendsA )
		  

Q.Interview Qestion 

What is inheritance
Why to use 
How to use
type of inheritance
Why mutiple and hybrid inhertainceare not allowed in case of class in Java

**************************28Feb
- Inhertaince is use for parent class commponent to child Class
- follow the ISA relationship 
- Java not allowed the mutiple Inheritance
- Multiple inheritance means one class property can transfer to another chld class property by writing extends in child Class

   ClassB -->
                      -->ClassC (public class ClassC extends A,B(){})   
   ClassA -->
   
 Q. Why Multi level inheritance are not allowed in java?
 R. 1. To avoid creation of unusual classes.
	2. Ambiguating (confusion) in calling Constructor of a parent class.
	3. Ambiguating calling method of a same signature (method, data)
	
	
- Private members of a the parent class cannot be inherited by child class.

- Java Support single, multilevel and hierarihical inheritance.
-Java does not support multple inheritance 	
	
 Q. Why java not allowd mutiple Inheritance
 R. At design level to avoid creation of unusual classes.And at implementation level ambiguty in calling constructor of parent Class.
    Ambiguaty in calling method of same signature from the parent class 

 Q.How we can achievemutiple inheritance in Java
- by using interfaces.

	Advantage of interface : - code reusability
							 - ISA Relation follow the interface

Ex:- 

Role(Parent)  salary(){} :-  child class  1. Developer	 2. Tester 3. Manager

Loan (Parent)  rateOfInterest(){} :- child class  1. BikeLoan 2. CarLaon					 

- sealed classes is used for to choose which class want to extends other than that classes can not be extends

	public sealed class Account permits SavingAccount,CurrentAccount {   --> Parent Class
		
	}
	
***********************3 March
	
- To extedns to child class:- 
	
	
	public non-sealed class SavingAccount extends Account{   --> Child Class of Account

    }


    public non-sealed class CurrentAccount extends Account{ --> Child class of Account

    }

	
- final claass is used for not  to extedn any related classes
- 

*************************4 March

A class member declared protected becomes a member of subclass of which type?
public member
private member
protected member
Static member
Your Answer: 3
Correct Answer: 2

Can a class inherit constructors from its superclass in Java? 
 
Yes
No
Your Answer: 1
Correct Answer: 2

**************************5 March
Polymorphism

- For override three condition are must 
1.inheritance is must.
2. Method signature must be same (method name, input type, returntype need same).
3. We cannot reduce visibility of overridden method.(means can not reduce the access  ex:- private, default,protected )
   
   Smaller to greather
   
   private-> protected -> default->public
   
Q. Why we to overriding 
R. Changing the implemtation as per the requirement

Q. What is the use of Constructor
R. To create object 

-Achieve security via Geeter and seeter of data

****************************6 March
Dynaic Dispatch

Q. What is Dynamic Dispatch
R. The process of calling overriden method is called Dynamic Dispatch.It is calling particular method at run time.

- Parent class reference child class object is their 
- In case of child class parent class reference object is not their 

  Person p = new Student()  --> Correct
  
  Student p = new Person() --> incorrect  X
  
  class A {
	  
								A obj = new A();
								A obj1 = new B();        All three are correct   --> so method consider at B class if method is not avaliable then same method call from A class      
								A obj2 = new C();    -->  so method consider at C class if method is not avaliable then same method call from B class (if C extends B)
  }
  
  class B extends A{
	  
								B b1 = new A() ;  -->incorrect
								B b2 = new B() ; -->corrrect    
								B b3 = new C(); --> correct    
  }
  class C extends B{
	  
	  
								C c1 = new A() ;  -->incorrect
								C c2 = new B() ; -->incorrrect 
								C c3 = new C();  --> incorrect
	  
  }
  
- At run time decided which method which have to implement is a dynamic dispatch

--Image-- refer the screenshort from pc  name Dynamic Binding 

Interview Question 
 
Q. What is overriding and dynamic dispatch and difference between them?
R. Overriding is a rewriting of new code.
   Dynamic Dispatch calling a code which is overriden.

- Dynamic binding is also called as Runtime Binding   

- For overriding inheritance is must
- Signature must be same
- Cannot reduce the access.
--- Image - - refer the screenshort from pc Polymorphism

Q. Can we override Static Method ? Can Do the Dynamic Dispatch?
R. No, clas level method can't override so can't able to do dynamic dispatch 

****************************7 March
Abstracton
Q. What is Abstraction
R. Focusing and expose essential Details

Q. Why we need to do the abstraction
R. 
- The class in which code is not present then it is called as Abstracton 

- In class having one abstract method  then have to write abstract of class.
- Can't able to create object of abstract class.

	abstract class shape{
		
		abstract double calArea();
	}
	
- Can able to create refernce of abstract class.

- implementation changes as per the class then we use the abstract method in parent class.
- In abstract class abstract method must have to implement in child class shows error 
  if don't want to implement the abstract method then child class also be keep as abstract.
- Can't able to create object of bastract class.
	  
Q. Why we want to do this abstract method.
R. While implementing the child class their might me possibility to miss it the method that why we create the abstract method.

*******************************17th March
- Two Types to Do Abstraction

	1. By using abstract  --> by using  -->  public abstract class A
	2. By using interfaces --> by using --> public interface X

-Abstract class contain instance varibale,constructor , non abstract method 
- In Interface class does not contain the instance varibale,constructor , non abstract method  as well 
		--> int id ; 
		    int bal;
-Interface class allows abstract method 
- Can not create the object in interface class but able to give the referances 
- Interface allow constants variable and abstract method 

Q. Is interface class allow int xyz =0 ;
R. Yes, 
	int xyz = 0;   // It looking like public static final int xyz =0 ;  --> it is constant variable

Q. Is interface class allow void m1() (abstract method);
R.Yes , 
	void m1(); // It looking like  public abstract void m1();

- implements is as same as inheritance
   public class X implements I1, I2{
	   
   };

Q. What is concret method?
R. The method which having implementation 

ex:- public m2();{
	System.out.prinln("m1");   --> implementation
}

- Mutiple inheritance achieve by implementation in java if needed.

Q. Why do the interface?
R. To achieve abstractions
	
- Interfaces allows  constants and abstract methods.
- Methods in the interface are by default public and abstract. 
	
Q. Where we use the Interface and Abstraction?
R. Interface can use when need to declare method two different unrelated class. 
   Abstraction Can use when need to declare method from two different related class.

- If class having varibale, abstract method, non-abstract method then we use the abstraction.
	if class having some method are implemented and some are non-implementation then use the abstraction.  
- If class having abstract class then use the interface 
	
Q. When to use the Interface and Abstraction?
R.Interface can use when need to declare method two different unrelated class.
  Abstraction can use to expose required details in subclass.

- A class extend single class but can implement multiple interfaces.

	public class X extends B implements P,Q,R {
								--> CORRECT
	}

public class X extends A,B implements P,Q,R {
								--> IN-CORRECT
	}

- interface class never extends the class ( becz if class having non-abstraction )
- interface can only extends interface not implements interface -->  interface R extends P
- interface can extends mutiple interface --> interface R extends P,Q
- Class can extends class and implement mutiple interface
- Class can not extends interface 
 
**********************************18th March

Q. Can we create object of interface?

Q.Can we create reference of interface?

**********************************19 th march (Read and Write)
Reading And Writing 
- To create file  File f = new File ("nameOfTheFile) --> using the file class of java which is already created 

- When we use the writing operation use the outputStream

	FileOutputStream  fos = new FileOutputStream(f );

- When use the reading operation use the InputStream

	FileInputStream fis = new FileInputStream(f);
	
-to write the data in FileOutputStream use the write method as -->    fos.write(variableName);

- to read the data use the read method  --> fis.readAllBytes();

- to convert the into String --> String res = new String (storeVariableName);

- to write character by character by using the FilWriter class --> FileWriter fw = new FileWriter(f);

- to read the character use the Filerredaer class --> FilerRedaer fr = new FileReader(f);

Q. What is use of fos.close();
R. Acquire resource To free the memory 
*********************************20th march

	
*********************************21st march
Expectional Handaling
Have to option 1. throws expectionl and 2. try and catch
- try or catch
	ex:- if try to open file if it is not open then use the expectional habadaling

		try {
			here sensetive code (means have chance to come the expection)
		}
		  catch ( hereIsexpectional ){
			 e.printStackTrace();  (expectional Handler) 
		  }finally{   
			syso("bye bye ...")  
		  }
			

- Catch blck is a expection handler 
- in try block write the execution code.
- finally block is run to clean the resource ( memory).The finally Block is used 
  to execute important code regardless of whether an exception occurs or not.
	
Q. What is  e.printStackTrace();  represent in catch block
R. It represent information of the expectional on particular line 

   ex:- java.lang.ArithmeticException: / by zero
	at expectionalHandaling/com.expectionalHandaling.A.main(A.java:13)

       Here java create a object of
	      // ArithmeticExpectional e = new Arithmetic Expectional();
		// by zero 
		// line 13 com.expectionalHandaling.A
		// thorw e

If we didn't write this in catch block then we can't see the expectional thorws on with line 
in console.

Q. What is Expection in java ?
R. An Exception is an unwanted or unexpected event that occurs during the execution of a program (i.e., at runtime)
  and disrupts the normal flow of the program’s instructions.

Q. What is expectional Handling?
R. Exception handling in Java allows developers to manage runtime errors effectively by using mechanisms like
   try-catch block, finally block, throwing Exceptions, Custom Exception handling, etc.
	   
Q. What is the use of expectional in Java
R. With the help of expectional in java so the prograam is not terminated.

Q. What is the advantage of Expection?
R. Expection will provide informationabout the problem is occur and location of the problem.


Example of Expectional 

1. Arithmetic Exception

	        int a =10;
		int b =0;
		
		try {
			
			
			int r =a/b;
			System.out.println(r); // ArithmeticExpectional e = new Arithmetic Expectional();
			// by zero 
			// line 13 com.expectionalHandaling.A
			// thorw e
		}
		catch(ArithmeticException e) {
			
			e.printStackTrace();            		    o/p:- java.lang.ArithmeticException: / by zero
										at expectionalHandaling/com.expectionalHandaling.A.main(A.java:13)
										bye bye ....
			
		}
		System.out.println("bye bye ....");


2.Expectional in Array out of bounds
		
		int c[]= {3,5,6,87,89,90,};
		
		try {
			System.out.println(c[50]); // ArrayIndexOutOfBoundsExpectional e = new ArrayIndexOutOfBoundsExpectional ();
			                          // index 50 is out of bunds for length 6
			                          // line 10 com.expectionalHandaling.A  (package name and class name)
						//  throws e
			
		}
		catch(ArrayIndexOutOfBoundsException e) {
			
			e.printStackTrace();
		}			          o/p:- java.lang.ArrayIndexOutOfBoundsException: Index 50 out of bounds for length 6
							at expectionalHandaling/com.expectionalHandaling.A.main(A.java:30)
							Hello
		
		System.out.println("Hello");
		
	}


3. 

	String s ="hello";
		
		try {
			
			System.out.println(s.charAt(100));
		}
		catch(StringIndexOutOfBoundsException e) {
			
			e.printStackTrace();                
		}
		                                              				  o/p:- java.lang.StringIndexOutOfBoundsException: String index out of range: 100
												at java.base/java.lang.StringLatin1.charAt(StringLatin1.java:48)
												at java.base/java.lang.String.charAt(String.java:1517)
												at expectionalHandaling/com.expectionalHandaling.A.main(A.java:44)
												kese ho..
		
		System.out.println("kese ho..");

- Expectional Handaling Mechanism

					Trowable
					   |
					Expection
	  				   |
				     ___	___
				    |		   |
RuntimeExpection (unchecked expection)               IOExpection (checked expection)
		                |		     SQLExpection
			NullPointerExpection	     FileNotFoundExpection		
			IndexOutOfBundsExpection     ClassNotFoundExpection
			ArrayOutOfBoundsExpection  
			StringOutOfBoundExpection



- The expection which is check at the runtime  is called as unchecked expectional  ex:- ArrayIndexOutOfBoundExpection, StringIndexOutOfBoundExpection
						This expection is the child of runtimeexpection
							
- The expection show in complie time forcefully is called checked expectonal 
- try and catch is used for the checked expection.
- Is expection created by us is called custom expection
- From error cannot be recovery but for expectional have recovery.
*********************************24th march
Expection Handling

- unchecked expection is descendant of RuntimeExpection
- Throwable is a class
- Throwable list direct child of Throwable
  Error and expection

- Custom Expection Or User Expection.
 The user or developer made the expection for their code then it is called Custom Expection

Q. how to create checked expection and unchecked expection
R. The custom expection class has to been extends the Expection class then it is a checked expection.
   The custom expection class has to been extends the RuntimeExpection then it is a unchecked expection.
	
	$ Example for Custom unchecked Expection $  

public class NegativePriceExpection extends RuntimeException {

	@Override
	public String toString() {
		return "NegativePriceExpection" + "(Price is negative)";
	}

	
}


	$ Example for checked expection $

public class MinBalanceExpection extends Exception {

	@Override
	public String toString() {
		return "MinBalanceExpection [] : balance is less than you asked for";
	}

	
}

To Throw in code

public static void main(String[] args) {
		
		double price  = -70;
		 
		try {
		if (price <0)
			throw new NegativePriceExpection();
		System.out.println("Try");
		}
		catch (NegativePriceExpection e) {
			e.printStackTrace();
			System.out.println("Catch");
		}
		System.out.println("Bye bye ...");
	}

If custom expection is unchecked then no need the try & catch block. 
If cutom Expection is checked then it is required the try & catch block.


- Exception Hierarchy
Expection Hierarchy must be manintain
Always smaller expection at above likewise,
	
	catch (FileNotFoundExpection e){
	
	}
	catch(IOExpection e){
		
	}
	catch(NullPointerExpection e){
		
	}
	catch(Expection e){
		
	}

Q. How to load the class
R. By using the Class.forName
like Class.forName("packagename.ClassName")

Q. What is expection propogation?
R.

*************************25th March  
Hands on Expection handling

*******************************************26th and 26th Collection of API


	
	
- Data Structure :- 

	
1. ArrayList:

   ArrayList<Product> al = new ArrayList<Product>();
		|			     |
	     objectName			  objectName

- to add in the array list then :

   	al.add(p1);
	al.add(p2);
	al.add(p3);

   It is maintin the insertion order
   It can add the duplicate 
   It allow mutiple null value
   It good in read operation.
   It downlist in adding in between index

2. LinkedList : 

 LinkedList<Product> al = new LinkedList<>();

   It is maintin the insertion order
   It can add the duplicate 
   It allow mutiple null value

3. HashSet :

HashSet<Product> al = new HashSet<>();

It not maintain the insertio order (not having index)
It not allow the duplication
It gives the uniqueness

4. LinkedHashSet:

It maintain the insertion order
It gives the uniqueness
It not allow the duplication




- To print in a all list then:

	For(Product t : al)
	syso(t)
- Collection and package in java is implementation of data Structre 

Q. What is the different between ArrayList & LinkedList?
R. With the use of LinkeList  can do the insertion and deletion very easly
   To read entire data use the ArrayList. With the help of ArrayList can do insertion and deletion not easily.


Q. What is Hashing
R. To find out the object from the large dataset.
	
Q. What is the difference of HashSet and LinkedSet?
R. Both are same but in linkedset maintain the insertionn order    
   But in hashset insertion order is not maintain.


**********************************************28th March and 30th March Collection of API
- Collection of API are interface to achieve abstraction

5.Vector  

Vector <Product> al = new Vector<>();

- It is a thread safe (means at a time only use one thread).
- Not completely thread safe but maximum it is safe.
- methods are identical
- Vector is slow as per array but reliability 
- methods of vector are synchronized

6. TreeSet

- sorted base on criteria
- doesn't take null value



I.Q. Difference between ArrayList LinkedList And Vector

	
Q. What is difference between Vector as comapre to ArrayList and LinkdList
R. Methods Are same in vector related to Arrayist and LinkedList

Q. when will the LinkedList use?
R. Used when frequently insertion and deletion at particular index.

- Collection can extends the iterable 

  <<interface>>
Interface Iterator 
* foreach()
*Iterator()
*splitIterator() 
	^
	|__________
	 	   |
               <<interface>>
	     Interface collection
            * + foreach()
	    * + iterator()
	    * + splitIterator()
	    * + add()
	    * + removeAll
	    * + size 



7. HashMap

	HashMap<Integer, String> hmap = new  HashMap<Integer , String>();

Integer are key and String is value

- keys are unique it cannot be duplicate, key should be charachtr, object
- HashMap deal with the wapper classes don't deal with integers (i)
- It is different from collection iterable.
- Values is in collection.


Q. What happen when keys are same ?
R. On that key old value replace by thr new value.

- To show the key in HashMap
  
	Set<Integer> keys =  hmap.keySet();
	   
	   for (Integer t: keys)
		   System.out.println(t);

- To show the value in HashMap

	Collection<String> values = hmap.values();
			   
			   for(String s :values)
				   System.out.println(s);

- To print the Value by using forEach

 hmap.forEach((k,v) ->System.out.println((k + " "+ v)));

- To show the entries ( 34 , "aditi");
    
	Set <Entry <Integer , String> >  entries  = hmap.entrySet();
entries.forEach(entry -> System.out.println(entry.getKey() + "  " + entry.getValue()));

- To get value on particular  Key 
	System.out.println(hmap.get(40));
			
- the pair of key and value becomes Entries and group of entries called Set


Q. What is the advantage of HashMap?
R. If to findout the record from too many dataset.

	Hasmap extends Map(in map store data in entries and in collection store the data in loop)
	
8. LinkedHashMap

- LinkedHashMap maintain the insertion order


9. TreeHashMap 

	TreeMap<Integer, Integer> map = new TreeMap<>();
	
- To get sorted on the basis of key use the treeHashMap.  
- Methods are similar as HashMap.


*****************************************1 April

10. TreeSet 

11. ArrayList

- maintain inserrtion order

* Methods : - 
1. stream 


		al.stream().forEach(s -> System.out.println(s));

- work only wrapper class and object
- It wrokable in all collection API

2. filter

	al.stream().filter(s -> s>50).forEach(s -> System.out.println(s));


************************************2nd April Sorting

1. Comaparable  interface 
- comapreTo (Single Parameter)
- in wapper class and String already implements the comparable


public class Product implements Comparable <Product> {
	

@Override
	public int compareTo(Product o) {
		
		Double price1 = this.price;
		Double price2 = o.price;
		
		return price1.compareTo(price2);
	}

}



For Integer ->

	@Override
	public int compareTo(Product o) {
		Double price1 = this.price;
		Double price2 = o.price;
		
		String name1 =this.name;
		String name2 = o.name;
		
		Integer id1 = this.id;
		Integer id2 =  o.id;
		
		return id1.compareTo(id2);
	}


- return statment can also be wriiten as
	
  	return new Integer (this.id).compareTo(o.id);


   Sort the object on the basis of price



2.compparator  interface 

 compare(two paramtere)

Create a class like this
	
public class ProductPriceComparator {

}

Product = class name 
Price = variable for which have to sortout
Comparator  = for this class is a comparator

	
- can not affect the class
- no limitation to apply the comparator

* Comparator Class-- 
public class ProductPriceComparator  implements Comparator<Product> {

	
	@Override
	public int compare(Product o1, Product o2) {
		String a1 = o1 .getName();
		String a2 = o2.getName();
		return a1.compareTo(a2);
	}
	
}

* To call in main class

System.out.println("-----By Name");
		Collections.sort(al, new ProductNameComparator());
		al.forEach(s-> System.out.println(s));



		System.out.println("---By Price");
		
		Collections.sort(al, new ProductPriceComparator());
		al.forEach(s -> System.out.println(s));

*******************************************4 April  Thread

If we neeed to use the thread use the start method.
ex: - 
	Thread t1 = new Thread(job);
	Thread t2 = new Thread(job);

	t1.start();
	t2.start();
Q. What is Thread ?
R. To sagrigate the work in parts at same time to done the task

* Issue with thread -
	

Note :- syso is a IO file 

Q. Where to use the Thread?

Q. What is the advantage of Thread?
R. Multiple job will run simutanously. Multi Tasking , increase the keyaspect



- One thread execute only for once can't restart it.


Ex:- 
	public class JobA implements Runnable {

	@Override
	public void run() {
		for(int i = 1 ; i<=20 ; i++)
			if(i%2 ==0)
				System.out.println(i);
	}

}

*****************************7 April HandsOn Thread      

	
	
- For one class --> one object mutiple thread we can create 

	 ex:-  
		 JobEven jobEven =new JobEven();	
		Thread t1 = new  Thread(jobEven);
		Thread t2 = new Thread(jobEven);
		Thread t3 = new Thread(jobEven);


- One class --> mutiple object  -> mutiple thread can created 

ex: - 
	JobEven jobEven3=new JobEven();
		JobEven jobEven4 =new JobEven();
		JobEven jobEven5 =new JobEven();
	
		JobSum jobSum = new JobSum();

		Thread t3 = new Thread(jobEven3);
		Thread t4 = new Thread(jobEven4);
		Thread t5 = new Thread(jobEven5);
		
		Thread t6 = new Thread(jobSum);
		t3.start();
		t4.start();
		t5.start();
		t6.start();

Note:- 	One Thread can execute only once 

-To get the name throught the thread 
	System.out.println( Thread.currentThread().getName()+" "+ i);

- As per our convinent use the setName() method

	ex: - Thread t1 = new  Thread(jobEven);
		t1.setName("t1"); // here we give the name to the thread
		t1.start();

- Use the join the method to complete the thread then push to other part of code 
it thows the expection of InterruptedException
		t2.join();
		t3.join();
		t4.join();

- Thread.currentThread().sleep(1000);   1000 is milisecond   1000 = 1sec
		use is thread takke the 1sec of break 

its shows the check expection so have to use the try catch block
			try {
				Thread.currentThread().sleep(1000);
			} catch (InterruptedException e) {
				
				e.printStackTrace();
			}



-  To increasse the priority use the setPriority() method

	t2.setPriority(10);

Max priority is 10  --> more priority
Min priority is 1  --> less priority
Default priority is 5  to use default use the ' Thread.NomPriority(); '

this all the are the priority is a requst not a method

- activeCount() is use for to know how many thread is running

	ex:- System.err.println(Thread.activeCount());

- setDaemon(true) - time is runing is daemon thread. Long runing task also called as background thread
  checking the thread how much reamning and show the completed thread

	

Thread: 
		override run() method by  using Runnable interface.

		start(): thread is ready for execution and start executing
		join();
		setName(" ");
		getName();
		currentThread();
		activecount();
		sleep(1000);
		setPriority
		getPriority


	MIN_Priority
	Max_Priority
********************************************** 8th April Handson Thread

*********************************************** 9th April Potentail of Java 8
Q. What is fuctional interfce?
R. Minimun and maximun abstract method that interface is fuctional interface

Single tomn proxy obersrval

********************************************* 10th April

Q. What is Hetrogeneous Element
R. As per array list it not restricted to the particular data type

EX:- 
	ArrayList al = new ArrayList<>()  --> Hetrogeneous element
It work with all collection API


Q. LIFO data structre
R. Last In First out Stack 

- To apply the condition in collection use the filter method

For even number as kind of same can apply te condition for others
	list.stream().filter(x -> x %2 ==0)
		.forEach(x -> System.out.println(x));

- To Convert array into list and apply the condition by using the stream 


      int a[] = {45, 46, 24, 2 , 7, 25,4575,23,345};
		
		Arrays.stream(a)
		.filter( s-> s%2 ==0 )
		.filter(s -> s%5 ==0)
		.forEach(s -> System.out.println(s));


- To Convert the string into upper case by using stream api
	ArrayList<String> list = new ArrayList<>();


		list.add("good");
		list.add("evening");
		list.add("all");

	
	list.stream().map(String :: toUpperCase).forEach(s -> System.out.println(s));
		


Or else easy trick 
list.stream().forEach(s -> System.out.println(s.toUpperCase()));




- Convert Array into upper case by using the stream api

String s[] = {"Hello" , "Hi" , "Bye"};

Arrays.stream(s).forEach(n -> System.out.println(n.toUpperCase()));


*********************************14 Leave And 15th April
Persistent Storage, Client Server Communication, Ports, Roundtrip

- Server
  Has two type 
  1. Hardware server
  2. Software servers
  3. App Servers

- Model View controller (MVC)	Model - communicating with data 
				View - data Present UI Layer
				controller - business logic/ Application logic


- Round Trip  =  Request from Client + Response from database

	Two type round trip Application and Hardware

- Have two type of IP address 1. ipv4 2. ipv6

Port No :- 1 to 65535
- Reserve port are  1 to 1024
- After reserve can use 1025 to 65535 can we for an application

Q. Why we not use the Reserve port number?
R. 

Java --> JDBC(CONNECTED Through) --> MYSQL

Ipaddress+ portno + dbname 
172.68.24.67:3306/crm	
    username+password
	"root","root"

-IP :- uniquely identify the given network

************************************** 16 th April

Data Base

Driver is sepcific for DATA Base
- First thing have to look for driver
- To search the dive for mysql use the oracel


*************************************************17 th April 

Installtion of DataBase

- To create data base commmand is 
	create database dbnameofdatabase ;

	usr dbnameofdatabase ;

- To create table  command is 

	create tabel product(id int PRIMARY KEY, name varchar(30) ,price decimal(10,2) ) ;


- To describe the database
	desc product ;

- To see the data command is 

	select * from product ;

- To insert the data command is 

	insert into product  (id ,name, price) values (101, 'pen' , 56.80) ;

Note : - Primary key should unique(not repeated) and not null


** Data Base to connect with Java 

public class void main(String [] agrs) throws expection SQLException, ClassNotFoundException

  Class.forName("com.mysql.cj.jdbc.Driver   path of mysql" );   --> should be correct 
  String dbname= " dbnameofdatabase" ; 
  String ur; = "jdb::mysql://localhost:3306/0" +dbnameofdatabase;   --> should be correct

connection co = DriverManager.getconnection(url,username, password);  --> should be correct
 if(con ! =null)
   syso("connction Established.....");
else

	 syso("could not established");




// select * from product have to fire from java to see the data 
String query = "Select * from prduct" ;
Statement stmt  = con.createStatement();
stmt.executeQuery(query); --> to execute the query

// to seee the data which is executd
ResultSet  rs =  stmt.execute Query(query);
// to see the data
While (rs.next()){
	syso(re.getInt("id")  +" "+ getString("name")+" " + getDouble("price"));

}
syso("Query is executed....");



- If data want to covert into array 
	ArrayList <Product> plist = new ArrayList<> ();

while(rs.next())
	plist.add(new Product(rs.getInt("id"), rs.getString("name"),rs.getDouble("price")));


Only want to print price 

plist.stream().forEach(s->syso(p.getprice()));

- Calling between data base and control is called ORM
ORM -  Object relational mapping







 








