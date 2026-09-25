let str = "532443";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}

document.write(reversed);

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