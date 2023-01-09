class Formatter {

  static capitalize(string){
    return string.charAt(0).toUpperCase()+string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, "")
  }

  static titleize(string){
    let myArray = string.split(" ");
     console.log(myArray);
    let result = [];
    let dontChangeThoseWords = ["the","a","an","but","of","and","for","at","by","from"]

      for (let i=0; i<myArray.length; i++){
      if (i === 0){
        result.push(this.capitalize(myArray[i]))}
      else if (dontChangeThoseWords.includes(myArray[i])){
        result.push(myArray[i])
      }
      else {
        result.push(this.capitalize(myArray[i]))
      }
      }
    
   return result.join(" ") 
    
  }
}
