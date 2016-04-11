


  var calcRMR = function () {
    var elemMale = document.getElementById("gridRadios1");
    var elemFemale = document.getElementById("gridRadios2");
    var ageGroup1 = document.getElementById("rAge1");
    var ageGroup2 = document.getElementById("rAge2");
    var ageGroup3 = document.getElementById("rAge3");
    var ageGroup4 = document.getElementById("rAge4");
    var rmr = "Angaben fehlen";

    //male
	  if (elemMale.checked){
		  if (ageGroup1.checked){
        rmr = calcRMRValues(17.5 , 651);
      }
      if (ageGroup2.checked){
        rmr = calcRMRValues(15.3 , 679);
      }
      if (ageGroup3.checked){
        rmr = calcRMRValues(11.6 , 879);
      }
      if (ageGroup4.checked){
        rmr = calcRMRValues(13.5 , 487);
      }
    }

    //female
    if (elemFemale.checked){
      if (ageGroup1.checked){
        rmr = calcRMRValues(12.2 , 749);
      }
      if (ageGroup2.checked){
        rmr = calcRMRValues(14.7 , 496);
      }
      if (ageGroup3.checked){
        rmr = calcRMRValues(8.7 , 829);
      }
      if (ageGroup4.checked){
        rmr = calcRMRValues(10.5 , 596);
      }
    }
    //alert(rmr);
    //document.rmrcalculation.rmrresult.innerHTML = rmr;
    document.getElementById('rmrresult').innerHTML = rmr + " Kcal";

    saveInLocalStorage();
    return rmr;

  };

  var calcRMRValues = function (faktor, summand) {
    //alert(summand);
    var weight = document.getElementById("weight");
    var produkt = faktor * weight.value;
    var rmr = produkt + summand;
    return rmr;
  };

  //persist in localStorage
  var saveInLocalStorage = function() {
    var form = document.getElementsByName('rmrcalculation')[0];
    if (localStorage['weight'] !== undefined) {
      var displayArea = document.getElementById('weight');
      displayArea.textContent = localStorage['weight'];
    }
//    form.addEventListener('submit', function() {
//      var nameField = document.getElementsByName('weight')[0];
//      localStorage['weight'] = nameField.value;
//    }, false);
  };
