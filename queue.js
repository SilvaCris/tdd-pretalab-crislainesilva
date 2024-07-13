class Queue {
  elements
  constructor(){
    this.elements = []
  }
  
  
size(){
  return this.elements.length
}

add(i) {
  this.elements.push(i)
  return i
}

peek (){
    return this.elements[0]
  }
  
dequeue() {
  
  return this.elements.shift()
}
  
}

module.exports = Queue