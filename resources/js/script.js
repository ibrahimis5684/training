// next button

document.addEventListener("DOMContentLoaded", function() {
    // button
    var groomButton = document.getElementById("groomButton");
    var brideButton = document.getElementById("brideButton");
    var backBrideButton = document.getElementById("backBrideButton");
    var kaziButton = document.getElementById("kaziButton");
    var backKaziButton = document.getElementById("backKaziButton");
    var backCertiButton = document.getElementById("backCertiButton");
    // div name
    var groomDiv = document.getElementById("groom");
    var brideDiv = document.getElementById("bride");
    var kaziDiv = document.getElementById("kazi");
    var certiDiv = document.getElementById("Certificate");
    var body = document.getElementById("body")
    
    // function
    groomButton.addEventListener("click", function() {
        groomDiv.style.display = "none";
        
        brideDiv.style.display = "block";
    });
    brideButton.addEventListener("click", function() {
        brideDiv.style.display = "none";
        
        kaziDiv.style.display = "block";
    });
    kaziButton.addEventListener("click", function() {
        kaziDiv.style.display = "none";

        certiDiv.style.display = "block";
    });
    // back button
    backBrideButton.addEventListener("click", function() {
        brideDiv.style.display = "none";
        
        groomDiv.style.display = "block";
    });
    backKaziButton.addEventListener("click", function() {
        kaziDiv.style.display = "none";
        
        brideDiv.style.display = "block";
    });
    backCertiButton.addEventListener("click", function() {
        certiDiv.style.display = "none";
        
        kaziDiv.style.display = "block";
    });
});

// lodder 
document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.showLoader');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var loaderBox = document.getElementById('loader-box');
            
            // Display the loader-box
            loaderBox.style.scale = '1';
            
            // Hide the loader-box and button after 5 seconds
            setTimeout(function() {
                loaderBox.style.scale = '0';
            }, 1000);
        });
    });
});


// certificate auto input system
// Get references to the input elements
const fullNameInput = document.getElementById('fullNameInput');
const fnInput = document.getElementById('fnInput');
const mnInput = document.getElementById('mnInput');
const dobInput = document.getElementById('dobInput');
const villInput = document.getElementById('villInput');
const psInput = document.getElementById('psInput');
const disInput = document.getElementById('disInput');
const brFullNameInput = document.getElementById('brFullNameInput');
const brFnInput = document.getElementById('brFnInput');
const brmnInput = document.getElementById('brmnInput');
const brDobInput = document.getElementById('brDobInput');
const brvillInput = document.getElementById('brvillInput');
const brPsInput = document.getElementById('brPsInput');
const brDisInput = document.getElementById('brDisInput');
const mwInput = document.getElementById('mwInput');
const rdInput = document.getElementById('rdInput');
const bnInput = document.getElementById('bnInput');
const pnInput = document.getElementById('pnInput');
const yInput = document.getElementById('yInput');
const doiInput = document.getElementById('doiInput');

const fillFullName = document.getElementById('fillFullName');
const fillFn = document.getElementById('fillFn');
const fillMn = document.getElementById('fillMn');
const fillVill = document.getElementById('fillVill');
const fillPs = document.getElementById('fillPs');
const fillDis = document.getElementById('fillDis');
const fillDob = document.getElementById('fillDob');
const fillBrFullName = document.getElementById('fillBrFullName');
const fillBrFn = document.getElementById('fillBrFn');
const fillBrMn = document.getElementById('fillBrMn');
const fillBrVill = document.getElementById('fillBrVill');
const fillBrPs = document.getElementById('fillBrPs');
const fillBrDis = document.getElementById('fillBrDis');
const fillBrDob = document.getElementById('fillBrDob');
const fillMw = document.getElementById('fillMw');
const fillrd = document.getElementById('fillrd');
const fillBn = document.getElementById('fillBn');
const fillPn = document.getElementById('fillPn');
const fillY = document.getElementById('fillY');
const filDoi = document.getElementById('filDoi');

function updateInputWidth(input) {
    input.style.padding = "5px";
    input.style.width = input.value.length + 4 + "ch";
}

fullNameInput.addEventListener('input', updateAutoInputs);
fnInput.addEventListener('input', updateAutoInputs);
mnInput.addEventListener('input', updateAutoInputs);
dobInput.addEventListener('input', updateAutoInputs);
villInput.addEventListener('input', updateAutoInputs);
psInput.addEventListener('input', updateAutoInputs);
disInput.addEventListener('input', updateAutoInputs);
brFullNameInput.addEventListener('input', updateAutoInputs);
brFnInput.addEventListener('input', updateAutoInputs);
brmnInput.addEventListener('input', updateAutoInputs);
brDobInput.addEventListener('input', updateAutoInputs);
brvillInput.addEventListener('input', updateAutoInputs);
brPsInput.addEventListener('input', updateAutoInputs);
brDisInput.addEventListener('input', updateAutoInputs);
mwInput.addEventListener('input', updateAutoInputs);
rdInput.addEventListener('input', updateAutoInputs);
bnInput.addEventListener('input', updateAutoInputs);
pnInput.addEventListener('input', updateAutoInputs);
yInput.addEventListener('input', updateAutoInputs);
doiInput.addEventListener('input', updateAutoInputs);

function updateAutoInputs() {
    fillFullName.value = fullNameInput.value;
    fillFn.value = fnInput.value;
    fillMn.value = mnInput.value;
    fillDob.value = dobInput.value;
    fillVill.value = villInput.value;
    fillPs.value = psInput.value;
    fillDis.value = disInput.value;
    fillBrFullName.value = brFullNameInput.value;
    fillBrFn.value = brFnInput.value;
    fillBrMn.value = brmnInput.value;
    fillBrDob.value = brDobInput.value;
    fillBrVill.value = brvillInput.value;
    fillBrPs.value = brPsInput.value;
    fillBrDis.value = brDisInput.value;
    fillMw.value = mwInput.value;
    fillrd.value = rdInput.value;
    fillBn.value = bnInput.value;
    fillPn.value = pnInput.value;
    fillY.value = yInput.value;
    filDoi.value = doiInput.value;
    document.querySelectorAll('.myInput').forEach(function(input) {
        updateInputWidth(input);
    });
}
