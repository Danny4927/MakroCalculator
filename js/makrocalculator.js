


  var calcRMR = function () {
    var gender = $('input[name="rSex"]:checked').val();
    var agegroupe = $('input[name="rAge"]:checked').val();
    var actilevel = $('input[name="rPAL"]:checked').val();

    var rmr = "Angaben fehlen";
    var pal = "Angaben fehlen";
    var result = "Angaben fehlen";

    //male
    if (gender === "male"){
        switch(agegroupe) {
            case "tillEighteen":
                rmr = calcRMRValues(17.5 , 651);
                break;
            case "tillThirty":
                rmr = calcRMRValues(15.3 , 679);
                break;
            case "tillSixty":
                rmr = calcRMRValues(11.6 , 879);
                break;
            case "biggerSixty":
                rmr = calcRMRValues(13.5 , 487);
                break;
        }
    }

    //female
    if (gender === "female"){
        switch(agegroupe) {
            case "tillEighteen":
                rmr = calcRMRValues(12.2 , 749);
                break;
            case "tillThirty":
                rmr = calcRMRValues(14.7 , 496);
                break;
            case "tillSixty":
                rmr = calcRMRValues(8.7 , 829);
                break;
            case "biggerSixty":
                rmr = calcRMRValues(10.5 , 596);
                break;
        }
    }

    if (gender === "male"){
          switch(actilevel) {
              case "1":
                  pal = 1.2;
                  break;
              case "2":
                  pal = 1.3;
                  break;
              case "3":
                  pal = 1.4;
                  break;
              case "4":
                  pal = 1.5;
                  break;
              case "5":
                  pal = 1.7;
                  break;
              case "6":
                  pal = 1.8;
                  break;
              case "7":
                  pal = 2.1;
                  break;
              case "8":
                  pal = 2.3;
                  break;
          }
      }
      if (gender === "female"){
          switch(actilevel) {
              case "1":
                  pal = 1.2;
                  break;
              case "2":
                  pal = 1.3;
                  break;
              case "3":
                  pal = 1.4;
                  break;
              case "4":
                  pal = 1.5;
                  break;
              case "5":
                  pal = 1.6;
                  break;
              case "6":
                  pal = 1.7;
                  break;
              case "7":
                  pal = 1.8;
                  break;
              case "8":
                  pal = 2.0;
                  break;
          }
      }
    //alert(rmr);
    //document.rmrcalculation.rmrresult.innerHTML = rmr;
      if (rmr !== "Angaben fehlen") {
          document.getElementById('rmrresult').innerHTML = rmr.toFixed(2) + " Kcal";
      }else{
          document.getElementById('rmrresult').innerHTML = rmr;
      }

    document.getElementById('palresult').innerHTML = pal;
      if(rmr !== "Angaben fehlen" && pal !== "Angaben fehlen") {
          result = rmr * pal;
          document.getElementById('result').innerHTML = result.toFixed(2) + " Kcal";
      }

    saveInLocalStorage(rmr);
    return rmr;

  };

  $( ".form-group" ).change(function() {
      calcRMR();
  });

  var calcRMRValues = function (faktor, summand) {
    //alert(summand);
    var weight = document.getElementById("weight");
    var produkt = faktor * weight.value;
    var rmr = produkt + summand;
    if (weight.value === ""){
        return "Angaben fehlen";
    }else {
        return rmr;
    }
  };

  //persist in localStorage
  var saveInLocalStorage = function(rmr) {
    //var form = document.getElementById("rmrcalculation");
    //if (localStorage['weight'] !== undefined) {
    //  var displayArea = document.getElementById("weight");
    //  displayArea.textContent = localStorage['weight'];
    //}
    //var weight = document.getElementById("weight");
    localStorage['rmr'] = rmr;
    localStorage['rAgeGroupe'] = $("input[name=rAgeGroupe]:checked").val();
    //document.getElementById("rAgeGroupe").value;
    localStorage['rSex'] = document.getElementById("rSex").value;
    localStorage['weight'] = document.getElementById("weight").value;
//    form.addEventListener('submit', function() {
//      var nameField = document.getElementsByName('weight')[0];
//      localStorage['weight'] = nameField.value;
//    }, false);
  };
