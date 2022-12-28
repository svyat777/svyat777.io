function plus1(rb100km,cb1L,kkm,result1){
  
   rb100km = document.getElementById('rb100km').value;
   rb100km = parseFloat(rb100km);
    
    
   cb1L  = document.getElementById('cb1L').value;
   cb1L = parseFloat(cb1L);
    
   kkm  = document.getElementById('kkm').value;
   kkm = parseFloat(kkm);
    
    result1 = (kkm * (cb1L * rb100km) / 100 );

   document.getElementById('out1').innerHTML = result1;
}

function plus2(rg100km,cg1L,kkm,result2){
   rg100km = document.getElementById('rg100km').value;
   rg100km = parseFloat(rg100km);
    
    
   cg1L  = document.getElementById('cg1L').value;
   cg1L = parseFloat(cg1L);
    
   kkm  = document.getElementById('kkm').value;
   kkm = parseFloat(kkm);
    
   result2 = (kkm * (cg1L * rg100km) / 100 );
    
    
 
   document.getElementById('out2').innerHTML = result2;
   }

