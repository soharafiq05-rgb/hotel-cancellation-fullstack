from pathlib import Path
import joblib
import pandas as pd

ROOT = Path(__file__).resolve().parent.parent
bundle = joblib.load(ROOT / "backend/models/model_bundle.joblib")

model = bundle["model"]
encoders = bundle["encoders"]
features = bundle["features"]

df = pd.read_csv(ROOT / "data/sample_inputs.csv")
df = df[features]

for col, le in encoders.items():
    df[col] = le.transform(df[col].astype(str))

prediction = model.predict(df)[0]
print("Prediction (0=not cancelled, 1=cancelled):", int(prediction))

if hasattr(model, "predict_proba"):
    proba = model.predict_proba(df)[0]
    print("Probabilities [not cancelled, cancelled]:", proba.tolist())

print("PASS: local inference")