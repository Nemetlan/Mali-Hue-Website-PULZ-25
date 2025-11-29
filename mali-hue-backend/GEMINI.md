# Project Overview

This project is a Python-based backend for an e-commerce website called "Mali Hue". It is built using the Flask framework and uses TinyDB as its database. The backend provides a RESTful API for managing products, handling customer orders, and administrative tasks.

## Key Technologies

*   **Backend:** Python, Flask
*   **Database:** TinyDB
*   **Dependencies:**
    *   `Flask-Cors`: For handling Cross-Origin Resource Sharing (CORS)
    *   `python-dotenv`: For managing environment variables
    *   `tinydb`: A lightweight document-based database

## Architecture

The application is structured into the following components:

*   **`app.py`**: The main entry point of the application. It creates the Flask app, registers blueprints, and defines basic error handling.
*   **`db.py`**: Handles all database interactions. It uses TinyDB to store data in JSON files in the `data/` directory.
*   **`dbMap.py`**: Creates a global instance of the `Database` class from `db.py`, making it accessible throughout the application.
*   **`routes/`**: This directory contains the blueprints for the different API endpoints:
    *   **`products.py`**: Manages the API endpoints for viewing products.
    *   **`checkout.py`**: Handles the checkout process, including payment simulation and order creation.
    *   **`admin.py`**: Provides endpoints for administrative tasks, such as viewing dashboard statistics and adding new products.

# Building and Running

To run this project, you will need to have Python and `pip` installed.

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd mali-hue-backend
    ```

2.  **Create and activate a virtual environment:**
    ```bash
    python -m venv .
    source bin/activate
    ```

3.  **Install the dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

4.  **Run the application:**
    ```bash
    python app.py
    ```

The application will start in debug mode on `http://127.0.0.1:5000`.

# Development Conventions

*   **Database:** The project uses TinyDB, and the database files are stored in the `data/` directory. The `db.py` file contains a `Database` class that encapsulates all database operations.
*   **API:** The API is organized into blueprints based on functionality. All API routes are prefixed with `/api`.
*   **Environment Variables:** While `python-dotenv` is listed as a dependency, there is no `.env` file in the repository. It is recommended to create one for managing configuration settings.
*   **Code Style:** The code follows general Python conventions. There is no specific linter or formatter configuration in the project.
