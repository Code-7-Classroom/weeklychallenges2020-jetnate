      /*Slideshow*/
      var i = 0;
      var images = [];
      var time = 2000;
      
      /*Slideshow Images*/
      images[0] = 'photos/kleco-logo.jpg';
      images[1] = 'photos/kleco-kids.jpg';
      images[2] = 'photos/klelco-black.jpg';
      images[3] = 'photos/kleco-girl.jpg';
      
     

      
      function changeImg(){
          document.slide.src = images[i];
      
      if(i < images.length - 1){
      
          i++;    
      } else { 
          i=0;
      
      }
      
      setTimeout("changeImg()", time);
      
      }
       
      
      window.onload = changeImg;

      /*Form Validation*/

      function checkforblank() {
          if (document.getElementById('name').value == "") {
              alert('please enter your name');
              document.getElementById('name').style.borderColor = "red";
              return false;
          }

          else if (document.getElementById('email').value == "") {
            alert('please enter your email');
            document.getElementById('email').style.borderColor = "red";
            return false;
        }

        else{
            return true;
        }
      }
