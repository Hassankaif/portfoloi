from faker import Faker
import numpy as np
import pandas as pd

fake = Faker()

dataset = []
for _ in range(20):
    dataset.append({
        'name': fake.name(),
        'email': fake.email(),
        'age': fake.random_int(min=18, max=80),
        'phno': fake.phone_number(),
        'password': fake.password()
    })

df=pd.DataFrame(dataset)
df.to_json('dataset.json')
print("successful")
# for entry in dataset:
#     print(entry)
