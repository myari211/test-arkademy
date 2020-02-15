function biodata(){
    let name = "Ari"
    let age  = 21
    let address = "Jl Nusa Indah 1"
    let hobbies = [ "Coding", "Traveling", "Gaming" ]
    let isMarried  = false
    let listSchool =[
        {
            name:"SDN Kebon Gedang 10",
            yearIn: 2004,
            yearOut: 2010,
            major : null
        },
        {
            name:"SMP Balai Perguruan Putri",
            yearIn: 2010,
            yearOut: 2013,
            major : null
        },
        {
            name:"SMK Negeri 5 Bandung",
            yearIn: 2013,
            yearOut: 2016,
            major : "Teknik Komputer Jaringan"
        },
    ]
    let skills = ["Javascript", "PHP", "Editing", "Design"]

    let interestInCoding =  true

    const json = {
        name, 
        age,
        address,
        hobbies,
        isMarried,
        listSchool,
        skills,
        interestInCoding
    }

    return JSON.stringify(json)
}

// Buat ngejalainin 
// console.log("Soal NO 1")
// console.log(biodata())
// console.log("------------------------------------", "\n\n")

// Soa no 2
const Validate = {
    userName : (userName) => {
        const userNameRegex = /^[a-z]{5,9}$/gm;
        const userNameCheck = userName.search(userNameRegex)
        return userNameCheck === 0 ? true : false
    }, 
    password: (password) => {
        const passwordRegex =  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-])(?=.*?[0-9]).{8,}$/gm;

        let counter = 0;

        for (let index = 0; index < password.length; index++) {
            const element = parseInt(password[index]);
            if(!isNaN(element)){
                counter++
            }
        }

        const passwordCheck = password.search(passwordRegex)
        return passwordCheck === 0 && counter > 2 ? true : false
    }
}

// console.log("SOAL NO 2")
// console.log("------------------------------------")
// console.log(Validate.userName("jok3r"))
// console.log(Validate.userName("suparman"))
// console.log(Validate.password("Dap0#r"))
// console.log(Validate.password("T3pungB#3r4s!"))
// console.log("------------------------------------", "\n\n")


// SOAL NO 3

function countChar(text, char){
    let counter = 0;
    for (let index = 0; index < text.length; index++) {
        const value = text[index];
        if(value === char){
            counter++
        }
    }
    return counter > 0 ? counter : "Not Found" 
}

// console.log("SOAL NO 3")
// console.log("------------------------------------")
// console.log(countChar("arka", "a"))
// console.log(countChar("javascript", 'x'))
// console.log("------------------------------------", "\n\n")  

function validateColor(hexCode){

    const err = "Format Hex Code Salah";


    if(hexCode.length !== 4 && hexCode.length !== 7) return err

    
    if(hexCode[0] !== "#") return err


    let result;

    hexCode  = hexCode.substring(1)
    
    for (let i = 0; i < hexCode.length; i++) {
        
        const char = hexCode[i];
        if( char  == "1" || 
            char == "2" || 
            char == "3" || 
            char == "4" || 
            char == "5" || 
            char == "6" || 
            char =="7" || 
            char =="8" || 
            char == "9" || 
            char.toLowerCase() == "a" ||
            char.toLowerCase() == "b" || 
            char.toLowerCase() == "b" || 
            char.toLowerCase() == "d" || 
            char.toLowerCase() == "e" ||
            char.toLowerCase() == "f" 
         ){
             result = "Format Hex Code Benar"
         }else{
             result = err
             break
         }
    }
    return result
}

// console.log("SOAL NO 3")
// console.log("------------------------------------")
// console.log(validateColor('#eee'))
// console.log(validateColor('#F3F3F3'))
// console.log(validateColor('#ezff8d'))
// console.log("------------------------------------", "\n\n")


function findHighestProfit(params) {
    
}