function kokeilu(id) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction2(this);
    }
  };

  var url = "http://www.finnkino.fi/xml/Schedule/";

  if (id) { // Jos klikattavalla alueella on oma id, lisätään URL osoitteeseen tarvittava pätkä.
    url += "?area=" + id; // lisää URL-osoitteen loppuun "?area=" ja id numeron
  }

  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}


function myFunction2(xml){

    console.log( xml.responseXML );
    let xmlDoc = xml.responseXML;
    
    let aika = xmlDoc.getElementsByTagName("dttmShowStart"); // Haetaan elokuvien esitysaika
    let alueet = xmlDoc.getElementsByTagName('Theatre'); // Elokuvateatteri
    let elokuva = xmlDoc.getElementsByTagName('OriginalTitle'); // Elokuvan nimi
    let kuvat = xmlDoc.getElementsByTagName('EventMediumImagePortrait'); // Elokuvan kuva

    document.write('<h1 style="color:yellow;">Finnkino</h1>'); // Sivun otsikko
    document.write('<body style="background-color:black;"</body>'); // Taustaväri asetetaan mustaksi
    document.write('<button class="button" onClick="history.go(0);">Palaa takaisin</button><br><br>'); // Luodaan nappula, jonka avulla pääsee takaisin elokuvateatteri valikkoon
    document.write('<table style=color:yellow; border="2px solid black "><tr><th>Aika</th><th>Paikka</th><th>Elokuva</th><th>Kuva</th></tr>'); // Taulukon luominen asetteleun selkeyttämiseksi
    for (let i=1; i < alueet.length; i++){ // Tulostetaan ruudulle haettavat elokuvanäytökset For silmukan avulla
      
        document.write('<tr style="height: 60px"><td style="padding: 30px">'+aika[i].innerHTML+'</td><td style="padding: 30px">'+alueet[i].innerHTML+'</td><td style="padding: 30px">'+elokuva[i].innerHTML+'</td><td style="padding: 30px"><img src="'+kuvat[i].innerHTML+'"/></td></tr>');
    
    }
    document.write('</table>'); 

      
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function filterFunction() { // Search toiminto alasvetovalikkoon. Koodi löydetty w3schools.comista
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }