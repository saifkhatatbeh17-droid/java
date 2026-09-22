function reverseNumber(x) {
            let reversed = 0;
            while (x > 0) {
                reversed = reversed * 10 + (x % 10);
                x = Math.floor(x / 10);
            }
            return reversed;
        }

        document.write("<h2>Q1: Reverse Number</h2>");
        document.write("Input: 532443 <br>");
        document.write("Output: " + reverseNumber(532443) + "<br><br>");

        document.write("<h2>Q2: Even or Odd (0-15)</h2>");
        for (let i = 0; i <= 15; i++) {
            if (i % 2 === 0) {
                document.write(i + " is even<br>");
            } else {
                document.write(i + " is odd<br>");
            }
        }
        document.write("<br>");

        function insertDashes(num) {
            let str = num.toString();
            let result = "";
            for (let i = 0; i < str.length; i++) {
                result += str[i];
                if (Number(str[i]) % 2 === 0 && Number(str[i + 1]) % 2 === 0) {
                    result += "-";
                }
            }
            return result;
        }

        document.write("<h2>Q3: Insert Dashes</h2>");
        document.write("Input: 025468 <br>");
        document.write("Output: " + insertDashes("025468") + "<br><br>");

        function Agechecker(age) {
            if (age >= 18) {
                return "The user is Adult";
            } else {
                return "The user is Minor";
            }
        }

        document.write("<h2>Q4: Age Checker</h2>");
        document.write("Age 20: " + Agechecker(20) + "<br>");
        document.write("Age 15: " + Agechecker(15) + "<br>");