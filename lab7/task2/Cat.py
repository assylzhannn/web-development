from Animal import Animal
class Cat(Animal):
    def __init__(self, name, age,height,food, color):
        self.color = self.color
        super().__init__(name, age, height, food)

    def speak(self):
        return "Meow meow"
    
    def color(self):
        return f"Cat's color: {self.color}"