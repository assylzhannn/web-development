class Animal:
    def __init__(self, name, age, height, food):
        self.name = name
        self.age = age
        self.height = height
        self.food = food
    
    def information(self):
        return f"Animal {self.name}. Loves: {self.food}."
    
    def speak(self):
        return "Able to make a sound"

    def tall(self):
        if self.height>150:
            return "so tall"
        else: return "Not tall"

    def __str__(self):
        return f"{self.name} is {self.age} old and {self.height} tall"