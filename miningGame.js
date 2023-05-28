window.onload = function() {
    document.getElementById("buttonsContainer").addEventListener("click", function(event) {
      const target = event.target;
  
      if (target.tagName.toLowerCase() === "button") {
        const mineralType = target.getAttribute("data-mineral");
  
        if (target.id.startsWith("mine")) {
          mineMineral(mineralType);
        }
  
        if (target.id.startsWith("buy")) {
          buyPerClickUpgrade(mineralType);
        }
      }
    });
  };
  