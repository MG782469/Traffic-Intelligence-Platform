import pandas as pd

df = pd.read_csv("hello.csv")

print(df["event_type"].unique()[:20])
print(df["priority"].unique()[:20])
print(df["event_cause"].unique()[:20])