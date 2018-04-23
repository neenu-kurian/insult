let chances=3

export const calculateChances=(correctComeback,userComeback)=>{
    console.log("correct comeback :"+ correctComeback)
    console.log("user entered comeback :"+ userComeback)
    if(!(correctComeback===userComeback))
    {
     chances=chances-1;
    }
    else
    console.log("keep it up!")
    return chances
}

