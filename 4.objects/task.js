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
    let marks = [mark];
    this.marks = marks;
  // добавить первую оценку 
    } else {
      this.marks = [...this.marks, mark];      
    }
}

Student.prototype.addMarks = function (...newMarks) {
  if(this.marks === undefined){ 
    let marks = [...newMarks];
    this.marks = marks;
    } else {
      this.marks = [...this.marks, ...newMarks];      
    }
}

Student.prototype.getAverage = function () {
  let sum = this.marks.reduce((sum, current) => sum + current, 0);
  let average = sum / this.marks.length;
  return average;  
}

Student.prototype.exclude = function(reason) {
  if(this.average < 2.5) {
    delete this.subject;
    delete this.marks;
    reason = 'law grades';
    this.excluded = reason;
  }
}

 