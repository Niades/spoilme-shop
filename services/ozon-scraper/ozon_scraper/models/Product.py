class Product:
    def __init__(self, name: str, image: str, description: str, price: float, instock: bool):
        self.name = name
        self.image = image
        self.description = description
        self.price = price
        self.instock = instock

    def __repr__(self):
        fields = tuple("{}={}".format(k, v) for k, v in self.__dict__.items())
        return self.__class__.__name__ + str(tuple(sorted(fields))).replace("\'","")
