window.onload = function(){
for (let sor = 0; sor < 10; sor++) {
    var sorElem = document.createElement("div");
    sorElem.classList.add("sor");
    document.getElementById("pascal").appendChild(sorElem);
    for (var oszlop = 0; oszlop <= sor; oszlop++) {
         var oszlopElem = document.createElement("div");
        oszlopElem.classList.add("elem");
        oszlopElem.style.backgroundColor = "red";
        if(faktoriálisR(sor)/(faktoriálisR(oszlop)*faktoriálisR(sor-oszlop))===1){
            oszlopElem.style.opacity = 0.4;
        }
        else{
            oszlopElem.style.opacity = 1-1/(faktoriálisR(sor)/(faktoriálisR(oszlop)*faktoriálisR(sor-oszlop)));
        }
        oszlopElem.innerHTML= `${faktoriálisR(sor)/(faktoriálisR(oszlop)*faktoriálisR(sor-oszlop))}`;
        sorElem.appendChild(oszlopElem);
    }

    }
}

var faktoriálisR = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * faktoriálisR(n - 1)
    }
}