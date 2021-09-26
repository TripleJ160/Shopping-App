//Main Music
playSound("assets/y2mate.com---lukrembo--boba-tea-royalty-free-vlog-music--AudioTrimmer.com-.mp3");


var eot = 20;
var bj = 50;
var de = 35;
var ml = 40;


var cartList = [];
var finalSum;
var number;
var address;

// Count of Items
var bjCount = 0;
var deCount = 0;
var eotCount = 0;
var mlCount = 0;

// Add to Cart Names
var eotName = "";
var bjName = "";
var deName = "";
var mlName = "";

// Individual Cart Value

var eotValue;
var bjValue;
var deValue;
var mlValue;

//ACCOUNT FUNCTIONS
onEvent("registerButton", "click", function( ) {
  playSound("assets/category_app/modern_ui_sound.mp3");
  setScreen("SignupScreen");
});


//Create Account
onEvent("signupButton", "click", function () {
  createRecord("Log In", {Name:(getText("nameInput")), Address:(getText("AddressInput")), Email:(getText("emailInpu")), PW:(getText("pwInpu"))}, function(record) {
    });
  playSound("assets/category_achievements/lighthearted_bonus_objective_4.mp3");
  setScreen("HomeScreen");
});

//Log In Account
onEvent("logIn", "click", function( ) {
  playSound("assets/category_app/modern_ui_sound.mp3");
  readRecords("Log In", {}, function(records) {
    for (var i = 0; i < records.length; i++) {
      if ((records[i]).Email == getText("emailInput")) {
        if ((records[i]).PW == getText("pwInput")) {
          setScreen("UserScreen");
          number = i;
          address = records[number].Address;
        } else {
          setProperty("Warning", "hidden", false);
        }
      } else {
        setProperty("Warning", "hidden", false);
      }
    }
  });
});

//Common Nav Buttons

//Shop Button

onEvent("ShopButton", "click", function () {
  playSound("assets/category_app/modern_ui_sound.mp3");
  setScreen("BrochureScreen");
});

//Cart


onEvent("BroCart", "click", function () {
  playSound("assets/category_app/modern_ui_sound.mp3");
  setScreen("CartScr");
});



//Shop Button on User Screen


//Brochure Buttons
onEvent("eotBroc", "click", function () {
  playSound("assets/category_app/modern_ui_sound.mp3");
  setScreen("EotScreen");
});

onEvent("deBroc", "click", function () {
  playSound("assets/category_app/modern_ui_sound.mp3");
  setScreen("DeScreen");
});

onEvent("bjBroc", "click", function () {
  playSound("assets/category_app/modern_ui_sound.mp3");
  setScreen("BjScreen");
});

onEvent("mlBroc", "click", function () {
  playSound("assets/category_app/modern_ui_sound.mp3");
  setScreen("MlScreen");
});


//Back Buttons

onEvent("brocBack", "click", function () {
  playSound("assets/category_app/app_button_2.mp3");
  setScreen("UserScreen");
});

onEvent("bjBack", "click", function () {
  playSound("assets/category_app/app_button_2.mp3");
  setScreen("BrochureScreen");
});

onEvent("deBack", "click", function () {
  playSound("assets/category_app/app_button_2.mp3");
  setScreen("BrochureScreen");
});

onEvent("eotBack", "click", function () {
  playSound("assets/category_app/app_button_2.mp3");
  setScreen("BrochureScreen");
});

onEvent("mlBack", "click", function () {
  playSound("assets/category_app/app_button_2.mp3");
  setScreen("BrochureScreen");
});

onEvent("cartBack", "click", function () {
  playSound("assets/category_app/app_button_2.mp3");
  setScreen("BrochureScreen");
});

addtocart();
deleteCart();



onEvent("BroCart", "click", function () {
  playSound("assets/category_achievements/lighthearted_bonus_objective_6.mp3");
  cartValue();
  updateScreen();
});

// Add to Cart Buttons

function addtocart() {
  
  onEvent("bjAC", "click", function () {
    bjATC();
  });
  
  onEvent("eotAC", "click", function () {
    eotATC();
  });
  
  onEvent("mlAC", "click", function () {
    mlATC();
  });
  
  onEvent("deAC", "click", function () {
    deATC();
  });
}


// Delete from Cart Buttons
function deleteCart() {
  
  onEvent("eotDelete", "click", function () {
    eotDFC();
  });

  onEvent("bjDelete", "click", function () {
    bjDFC();
  });

  onEvent("deDelete", "click", function () {
    deDFC();
  });

  onEvent("mlDelete", "click", function () {
    mlDFC();
  });
}

// 4 Functions to Add Items to a List

function eotATC() {
  eotCount = eotCount + 1;
  playSound("assets/category_digital/ping.mp3");
  appendItem(cartList, eot);
  eotValue = "$" + (eot * eotCount);
  eotName = "Essence of Time          X " + eotCount + "     " + "= " + eotValue;
  setText("eotCounter","X " + eotCount);
  console.log(cartList);
}


function bjATC() {
  bjCount = bjCount + 1;
  playSound("assets/category_digital/ping.mp3");
  appendItem(cartList, bj);
  bjValue = "$" + (bj * bjCount);
  bjName = "Blue Jade                     X " + bjCount + "    " + "= " + bjValue;
  setText("bjCounter","X " + bjCount);
  console.log(cartList);  
}


function deATC() {
  deCount = deCount + 1;
  playSound("assets/category_digital/ping.mp3");
  appendItem(cartList, de);
  deValue = "$" + (de * deCount);
  deName = "Daffodil Essence          X " + deCount + "      " + "= " + deValue;
  setText("deCounter","X " + deCount);
  console.log(cartList);
}


function mlATC() {
  mlCount = mlCount + 1;
  playSound("assets/category_digital/ping.mp3");
  appendItem(cartList, ml);
  mlValue = "$" + (ml * mlCount);
  mlName = "Minty Lemon                X " + mlCount + "      " + "= " + mlValue;
  setText("mlCounter","X " + mlCount);
   console.log(cartList);
}

// 4 Functions to Delete Items from a List
function eotDFC() {
  eotCount = eotCount - 1;
  if (eotCount < 0) {
    eotCount = 0;
    appendItem(cartList, 0);
  }
  removeItem(cartList, -1);
  console.log(cartList);
  eotValue = "$" + (eot * eotCount);
  eotName = "Essence of Time          X " + eotCount + "     " + "= " + eotValue;
  setText("eotCounter","X " + eotCount);
  playSound("assets/category_digital/error_1.mp3");
}


function bjDFC() {
  bjCount = bjCount - 1;
  if (bjCount < 0) {
    bjCount = 0;
    appendItem(cartList, 0);
  }
  removeItem(cartList, -1);
  console.log(cartList);
  bjValue = "$" + (bj * bjCount);
  bjName = "Blue Jade                     X " + bjCount + "    " + "= " + bjValue;
  setText("bjCounter","X " + bjCount);
  playSound("assets/category_digital/error_1.mp3");
}


function deDFC() {
  deCount = deCount - 1;
  if (deCount < 0) {
    deCount = 0;
    appendItem(cartList, 0);
  }
  removeItem(cartList, -1);
  console.log(cartList);
  deValue = "$" + (de * deCount);
  deName = "Daffodil Essence          X " + deCount + "      " + "= " + deValue;
  setText("deCounter","X " + deCount);
  playSound("assets/category_digital/error_1.mp3");
}


function mlDFC() {
  mlCount = mlCount - 1;
  if (mlCount < 0) {
    mlCount = 0;
    appendItem(cartList, 0);
  }
  removeItem(cartList, -1);
  console.log(cartList);
  mlValue = "$" + (ml * mlCount);
  mlName = "Minty Lemon                X " + mlCount + "      " + "= " + mlValue;
  setText("mlCounter","X " + mlCount);
  playSound("assets/category_digital/error_1.mp3");
}



// Function to Calculate the value of the Cart
function cartValue() {
var sum = 0;
for (var i = 0; i < cartList.length; i++) {
  sum += cartList[i]}
  finalSum = sum;
console.log(sum);
}
 
// Function to put address on Cart Screen
function readAddress(address) {
  var faddress = "Shipping Address : " + address;
  return faddress;
}
 
// Function to Update Screen 
function updateScreen() {
setText("finalV", "TOTAL PRICE: $ " + finalSum);
setText("bjCount", bjName);
setText("eotCount", eotName);
setText("deCount", deName);
setText("mlCount", mlName);

setText("shippingAdd", readAddress(address));
}




