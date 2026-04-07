from Dog import Dog
from Cat import Cat


my_dog = Dog("Rex",5, 151,"meat", "Alex")
my_cat = Cat("Mamyq",3,80,"fish", "white")

animals = [my_dog, my_cat]
for animal in animals:
    print(animal)
    print(animal.information())
    print(animal.speak())
    print(animal.tall())
    print()