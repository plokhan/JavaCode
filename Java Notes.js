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









 








