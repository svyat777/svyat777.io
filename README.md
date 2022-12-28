<!DOCTYPE html>
<html>
    <head>
        <title>svyat kk</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
        <link rel="stylesheet" href="css+html/eeee.css"> 
        
        <style>
            .cr{
           cursor: help;
padding-left: 400px;
         
                    
            } 
     
        </style>
        
     
        
    </head>
    <body>
        
        <script src="benzin771.js">
            
        </script>
        <div class="cr">
    <p> разход бензина на 100км в л:  <input onblur="this.value = eval(this.value)" id="rb100km">
</p>
    <p> разход газа на 100км в л: <input onblur="this.value = eval(this.value)" id="rg100km">
</p>  </div>
    
    <hr>
     <div class="cr">
    <p> введите цену бензина на 1л: <input  type="number" id="cb1L">
</p>
    <p> введите цену газа на 1л: <input type="number" id="cg1L">
</p>    
      </div>
    <hr>
     <div class="cr">
    <p> введите кол-во километров: <input type="number" id="kkm">
</p>
    </div>
    <hr>
     <div class="cr">
      <button onclick='plus1()'>цена бензина</button> 
      <a class="b">
    <p>цена бензина:</p> <p id='out1'></p>
    </a>
    
    
    <button onclick='plus2()'>цена газа</button>
    <a class="a">
        
    <p>цена газа:</p>
    <p id='out2'></p>
    
    </a>
    
    
</div>
    </body>
</html>
