from src.inference.predict import predict as predict 

def __main__():
    print(predict("./data/splits/test/r1_45.jpg"))
    
print("--> The output in json format is :")
__main__()

