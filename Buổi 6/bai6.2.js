var lastOperation = null;
        if (lastOperation) {
            lastOperation.classList.remove("red-text");
          }
        function cong() {
            var so1 = parseFloat(document.getElementById("cong1").value);
            var so2 = parseFloat(document.getElementById("cong2").value);
            var ketqua1 = so1 + so2;
            document.getElementById("ketqua1").value = ketqua1;
            var phepcong = so1 + " + " + so2 + " = " + ketqua1;
            document.getElementById("kqpheptoan1").textContent = phepcong;
            var lastOperation = document.querySelector(".red-text");
          if (lastOperation) {
            lastOperation.classList.remove("red-text");
          }
        
          document.getElementById("kqpheptoan1").classList.add("red-text");
        }
        function tru() {
            var so3 = parseFloat(document.getElementById("tru1").value);
            var so4 = parseFloat(document.getElementById("tru2").value);
            var ketqua2 = so3 - so4;
            document.getElementById("ketqua2").value = ketqua2;
            var pheptru = so3 + " - " + so4 + " = " + ketqua2;
            document.getElementById("kqpheptoan2").textContent = pheptru;
            var lastOperation = document.querySelector(".red-text");
          if (lastOperation) {
            lastOperation.classList.remove("red-text");
          }
        
          document.getElementById("kqpheptoan2").classList.add("red-text");
        }
        function nhan() {
            var so5 = parseFloat(document.getElementById("nhan1").value);
            var so6 = parseFloat(document.getElementById("nhan2").value);
            var ketqua3 = so5 * so6;
            document.getElementById("ketqua3").value = ketqua3;
            var phepnhan = so5 + " * " + so6 + " = " + ketqua3;
            document.getElementById("kqpheptoan3").textContent = phepnhan;
            var lastOperation = document.querySelector(".red-text");
            if (lastOperation) {
                lastOperation.classList.remove("red-text");
            }
            
            document.getElementById("kqpheptoan3").classList.add("red-text");
        }
        function chia() {
            var so7 = parseFloat(document.getElementById("chia1").value);
            var so8 = parseFloat(document.getElementById("chia2").value);
            if(so8=="0"){
                document.getElementById("ketqua4").value = "không có kết quả"; 
                var phepchia = so7 + " / " + so8 + " = " + "không có kết quả";
                document.getElementById("kqpheptoan4").textContent = phepchia;
                var lastOperation = document.querySelector(".red-text");
            if (lastOperation) {
              lastOperation.classList.remove("red-text");
            }
        
            document.getElementById("kqpheptoan4").classList.add("red-text");
            }
            else{
                var ketqua4 = so7 / so8;
                document.getElementById("ketqua4").value = ketqua4;
                var phepchia = so7 + " / " + so8 + " = " + ketqua4;
                document.getElementById("kqpheptoan4").textContent = phepchia;
                var lastOperation = document.querySelector(".red-text");
                if (lastOperation) {
                  lastOperation.classList.remove("red-text");
                }
            
                document.getElementById("kqpheptoan4").classList.add("red-text");    }
         
        }