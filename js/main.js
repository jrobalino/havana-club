document.addEventListener("DOMContentLoaded", function(event) {
      // - Code to execute when all DOM content is loaded. 
      // - including fonts, images, etc.

	
    // Calculate years in business and copyright date
	var year = new Date().getFullYear();
	var yearsInBusiness = year - 2008;

	var yearsText = document.getElementById("goodYears");
	var copyright = document.getElementById("copyright");
	
	yearsText.innerHTML = yearsInBusiness;
	copyright.innerHTML = year;

  });