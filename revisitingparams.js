let set1 = ["cup1", "cup2", "dish1"]
let set2 = ["cup4", "cup11", "dish2"]
let set3 = ["cup4", "cup11", "dish55"]
let set55 = ["cup4", "cup11", "dish55", "cup4", "cup11", "dish55"]


function dishwasher(set){
    for (let i=0; i< set.length; i++){
        console.log (set [i])
    }
}

dishwasher (set55)

dishwasher (set2)
dishwasher (set3)