var color = require("chalk")
var dog_name = "lily"

dog_name = "elliott"

var the_dog = {
    name: "lily",
    age: 10,
    description: "cute and sweet",
}

var the_second_dog = {
    name: "rocky",
    age: 14,
}

the_dog.name

console.log(the_dog)
console.dir(the_dog.name)

var another_name_for_log = console.log
another_name_for_log("hello world")
console.dir(another_name_for_log)

var print_dog = function(some_dog){
    var name_and_age = some_dog.name + " (" + some_dog.age +") "
    if(some_dog.description === undefined){
        console.log(name_and_age)
    } else{
        console.log(name_and_age + some_dog.description)
    }
}
console.dir(color)
color.supportsColor = true
console.log(color.blue('Hello world!'))


print_dog(the_dog)
print_dog(the_second_dog)
