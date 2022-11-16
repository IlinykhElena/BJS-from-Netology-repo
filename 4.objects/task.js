function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

// let studentA = new Student("Nina", "female", 45);
// let studentB = new Student("Sergei", "male", 38);
// let studentC = new Student("Hunter Baiden", "male", 20);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){ 
    this.marks = [mark];
  // добавить первую оценку 
    } else {
      this.marks = [...this.marks, mark];      
    }
}

Student.prototype.addMarks = function (...newMarks) {
  if(this.marks === undefined){ 
    this.marks = newMarks;
    } else {
      this.marks.push(...newMarks);      
    }
}

Student.prototype.getAverage = function () {
  let average = (this.marks.reduce((sum, current) => sum + current, 0)) / this.marks.length;
  return average;  
}

Student.prototype.exclude = function(reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}

 