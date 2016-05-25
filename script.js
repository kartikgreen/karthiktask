calculateAge(1990);
function calculateAge(birthYear)
    {
        
        
        var birthYear=birthYear;
        var today=new Date();
        var currentyear=today.getFullYear();

       
            document.getElementById("result1").innerHTML="<b>RESULT<b>:your age is either "+(currentyear-birthYear)+" or "+(currentyear-birthYear-1);
                  
    }
    
    calculateSupply(27,50);
    function calculateSupply(age,amt){
        var age=age;
        var amt=amt;
        
       var maxage=100;
        
        var years=maxage-age;
        var today=new Date();
        var currentyear=today.getFullYear();
        var totyrs=currentyear + years;
        var leapcount=0;
        for(var i=currentyear; i<=totyrs; i++)
            {

                if(i%400===0 || i%4===0 ){
                    leapcount++;

                }


            }



        var lifetime= maxage- age;
        document.getElementById("result2").innerHTML="<b>RESULT<b>:lifetime supply is "+lifetime *(365+leapcount)*amt;


        
        
    }
    calculatecircumference(1);

      function calculatecircumference(r){
            
        var radius=r;
        
        var circumference= 2*3.142*radius;
        document.getElementById("result3").innerHTML="<b>RESULT<b>:The circumference is "+circumference;

        }
    
calculatearea(1);
    function calculatearea(a){
     var radius=a;
     var area= 3.142*radius*radius;
     document.getElementById("result4").innerHTML="<b>RESULT<b>:The area is "+area;

    }
    

    fahrenheitToCelsius(100);
    function fahrenheitToCelsius(v){
    var fahrenheit=v;
    document.getElementById("result5").innerHTML="<b>RESULT<b>:The celsius is "+(fahrenheit-32)*5/9;


    }

    celsiusToFahrenheit(100);
    function celsiusToFahrenheit(v){
      var celsius=v;
      document.getElementById("result6").innerHTML="<b>RESULT<b>:The Fahrenheit is "+(celsius+32)*9/5;
  

    }
    
    
