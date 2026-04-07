from Animal import Animal
class Dog(Animal):
    def __init__(self, name, age, height, food, owner_name):
        self.owner_name = owner_name
        super().__init__(name, age, height, food)

    def speak(self):
        return "Bark!"
    
    def owner(self):
        return f"Dog's owner is {self.owner_name}"
        
    


