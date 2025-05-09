class Animal:
    def speak(self):
        pass

class Dog(Animal):
    def speak(self):
        return "Woof!"

class Cat(Animal):
    def speak(self):
        return "Meow!"

class Bird(Animal):
    def speak(self):
        return "Tweet!"

def animal_sound(animal_type):
    if animal_type == "dog":
        return Dog().speak()
    elif animal_type == "cat":
        return Cat().speak()
    elif animal_type == "bird":
        return Bird().speak()
    else:
        return "Unknown animal"

print(animal_sound("dog"))
print(animal_sound("cat"))
print(animal_sound("bird"))
print(animal_sound("fish"))

//Prompt:Simplify this code. Avoid using if/else chains but retain all function return values.

