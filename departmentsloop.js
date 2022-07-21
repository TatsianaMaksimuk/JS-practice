

let companyATeam = ["Department 1", "Department 2", "Department 3", "Department 4"]
const companySalaries = [50000, 60000, 70000, 80000]
let companyEmployees = [["Art", "Hannah", "Cameron"], ["Jake", "Grethel", "Tanya", "Baheem"], ["Arnell"], ["Mathias", "Ben"]]

//variant 1
for (i = 0; i < companyATeam.length; i++) {
         if (companySalaries[i] > 70000)
    {console.log(companyATeam[i] + ' has salary ' + companySalaries[i] + ': ');}
    for (j = 0; j < companyEmployees[j].length; j++) {
        if (companySalaries[i] > 70000) {
           
            console.log(companyEmployees[i][j] + ' - ' + companySalaries[i])
        }
    }
    console.log("\n")
}



