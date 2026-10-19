# Hotel Booking Cancellation Prediction — Full Stack ML Application

Research/teaching prototype predicting whether a hotel booking will be
cancelled, built from a trained XGBoost model wrapped in a Flask REST API
and an Angular 21 frontend, with automated GitHub Actions CI and a static
GitHub Pages deployment.

## Problem
Binary classification: predict `is_canceled` (0 = will not cancel,
1 = will cancel) for a hotel booking, given 28 booking-level features.

## Model provenance
- Trained in `notebooks/Devops_Lab_1.ipynb`
- Algorithm: XGBoost (`XGBClassifier`), compared against Random Forest
- Preprocessing: per-column `LabelEncoder` for 10 categorical features,
  fitted during training and saved alongside the model
- Dataset: [Hotel Booking Demand](https://www.kaggle.com/datasets/jessemostipak/hotel-booking-demand) (Kaggle, Antonio et al. 2019)
- Saved artifact: `backend/models/model_bundle.joblib`
  (`{model, encoders, features, task, model_version}`)

## Tech stack
- Backend: Python 3.12, Flask, scikit-learn, XGBoost
- Frontend: Angular 21 (standalone components), TypeScript
- CI/CD: GitHub Actions
- Hosting: GitHub Pages (static frontend only)

## Project structure
See `backend/`, `frontend/`, `data/`, `notebooks/`, `.github/workflows/`.

## Installation

### Backend
\`\`\`
py -3.12 -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r backend/requirements.txt
\`\`\`

### Frontend
\`\`\`
cd frontend
npm install
\`\`\`

## Running locally (three terminals)

**Terminal 1 — Flask**
\`\`\`
.\.venv\Scripts\Activate.ps1
python backend\app.py
\`\`\`
Serves http://127.0.0.1:5000 (`GET /health`, `POST /predict`).

**Terminal 2 — Angular**
\`\`\`
cd frontend
ng serve --open --proxy-config proxy.conf.json
\`\`\`
Opens http://localhost:4200.

**Terminal 3 — tests/commands**
\`\`\`
python backend\test_pipeline.py
python backend\test_api.py
python -m pytest -q backend\tests
\`\`\`

## Links
- GitHub repository: https://github.com/soharafiq05-rgb/hotel-cancellation-fullstack
- Live static demo (GitHub Pages): https://soharafiq05-rgb.github.io/hotel-cancellation-fullstack/

## Deployment limitations
GitHub Pages hosts only the static Angular build. It does **not** run
Python, Flask, or the trained model. On the public Pages URL, the
prediction button is disabled and a notice explains that live
predictions require running Flask and Angular locally. Public visitors
cannot invoke the local Flask server.

## Research / ethics disclaimer
This is a teaching prototype for an academic DevOps lab. Predictions
are not validated for real-world hotel revenue-management decisions
and should not be used as the sole basis for business decisions.