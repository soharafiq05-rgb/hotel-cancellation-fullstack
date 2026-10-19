from pathlib import Path
import json
import pandas as pd

ROOT = Path(__file__).resolve().parent.parent
df = pd.read_csv(ROOT / "data/sample_inputs.csv", nrows=1)

payload = {}
for key, value in df.iloc[0].items():
    payload[key] = None if pd.isna(value) else (value.item() if hasattr(value, "item") else value)

out = ROOT / "backend/test_payload.json"
out.write_text(json.dumps(payload, indent=2), encoding="utf-8")
print(f"Created {out} with {len(payload)} features")