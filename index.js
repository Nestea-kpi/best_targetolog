function openMenu() {
    var menu = document.getElementById("menu");
    menu.classList.add("active");
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.details');
    buttons.forEach(function(button) {
      button.addEventListener('click', function() {
        var block = button.parentNode;
        var moreInfo = block.querySelector('.more-info');
        var txt = block.querySelector('.txt');
  
        var previousScrollPos = window.pageYOffset;
        
        // Змінюємо стан поточного блоку
        block.classList.toggle('expanded');
        
        // Змінюємо вміст кнопки
        if (block.classList.contains('expanded')) {
          button.textContent = 'Згорнути';
        } else {
          button.textContent = 'Детальніше';
        }
  
        // Змінюємо стан тексту та додаткової інформації
        if (block.classList.contains('expanded')) {
          txt.style.display = 'none';
          moreInfo.style.display = 'block';
        } else {
          txt.style.display = 'block';
          moreInfo.style.display = 'none';
        }
        if (block.classList.contains('expanded') && !block.classList.contains('top-block')) {
            adjustScrollPosition(block, previousScrollPos);}
    });
    });

    function adjustScrollPosition(block, previousScrollPos) {
        var blockTop = block.getBoundingClientRect().top;
        var scrollOffset = blockTop - (window.innerHeight / 2);
        var targetScrollPos = previousScrollPos + scrollOffset;
    
        if (targetScrollPos < 0) {
          targetScrollPos = 0;
        }
    
        window.scrollTo({
          top: targetScrollPos,
          behavior: 'smooth'
        });
      }
});
 
  
  
  
  


function closeMenu() {
  var menu = document.getElementById('menu');
  menu.style.display = 'none';
}
function closeMenu() {
    var menu = document.getElementById("menu");
    menu.classList.remove("active");}
    

     function showNotification(message, duration) {
        const notificationElement = document.getElementById("notification");
        const notificationTextElement = document.getElementById("notificationText");
        
        notificationTextElement.textContent = message;
        notificationElement.classList.remove("hide");
        
        setTimeout(() => {
          notificationElement.classList.add("hide");
        }, duration);
      }
      
      function copyToClipboard(text) {
        navigator.clipboard.writeText(text)
          .then(() => {
            showNotification("Текст скопійовано!", 2000);
          })
          .catch((error) => {
            console.error("Помилка під час копіювання тексту:", error);
          });
      }

      
      