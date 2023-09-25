     //// console.log("This is a Google Chrome Extension by Shadow.Cipher");


     //// let _____a_href = Array.from(document.getElementsByTagName('a'));

     //// let _____a_Links = [];

     //// function getMyLinks(arg, arg1) {

        ////  for(i=0; i < arg1.length; i++) {
    
          ////[266].childNodes[0].ownerDocument.location
    
         ////         arg[i] = arg1[i].outerHTML.valueOf();
            
            //// this works, but trying something else
            ////console.log(arg1[i].outerHTML.valueOf())
         ////         console.log(arg1[i].href);
            
            //// arg[i] = JSON.stringify(arg1[i].childNodes[0].ownerDocument.outerHTML)
            
          ////    }
        
        ////  return arg;
    
    ////  }

    document.addEventListener('DOMContentLoaded', function() {
      var loadTagBossButton = document.getElementById('loadTagBoss');
      loadTagBossButton.addEventListener('click', function() {
          let d = document;
          let f = d.createElement('form');
          let nDiv = d.createElement('div');
          nDiv.innerText="";

        });
      }, false);


  
    

/* 
  // document.addEventListener('DOMContentLoaded', function() {
  //var checkPageButton = document.getElementById('checkPage');
  //checkPageButton.addEventListener('click', function() {

    //chrome.tabs.getSelected.getMyLinks(_____a_Links, _____a_href);
    //chrome.tabs.getSelected(null, function(tab) {
      //d = document;
      

     // var f = d.createElement('form');
      //f.action = 'getMyLinks(_____a_Links, _____a_href).call()';
      //f.method = 'post';
     // var i = d.createElement('input');
      //i.type = 'hidden';
     // i.name = 'url';
     // i.value = tab.url;
      //f.appendChild(i);
     // d.body.appendChild(f);
     // f.submit('getMyLinks(_____a_Links, _____a_href)');
   // });
  //}, false);
//}, false); 
*/