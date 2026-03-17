// Q4 Drill 1

function electricty_consuption () {
   let electricty_classsifier = document.getElementById('elec1').value.toLowerCase();
    
   if (electricity_name > 0 && electricity_classsifier <= 100) {
        window.alert('Discounted rates')
    }
   
    else if (electricity_name > 101 && electricity_classsifier <= 200) {
        window.alert('Normal Rate')
    }
   
    else if (electricity_name > 201 && electricity_classsifier <= 300) {
        window.alert('Typical Usage')
    }
   
    else if (electricity_name > 301 && electricity_classsifier <= 500) {
        window.alert('Higher Usage')
    }
    
    else if (electricity_name > 500 && electricity_classsifier <= 1000) {
        window.alert('Very High Usage')
}
}