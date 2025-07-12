import os
from pathlib import Path

# Define the directory structure
structure = {
    "backend": [
        "app",
        "app/routes",
        "app/services",
        "app/static",
        "app/static/resume",
        "app/static/certifications",
        "tests"
    ]
}

# Define the files to be created and their paths
files = {
    "backend/app/main.py": "# FastAPI app with middleware\n",
    "backend/app/config.py": "# Environment configuration\n",
    "backend/app/models.py": "# Pydantic models with validation\n",
    "backend/app/routes/contact.py": "# Contact form endpoints\n",
    "backend/app/routes/static.py": "# Static file serving\n",
    "backend/app/services/db.py": "# MongoDB operations\n",
    "backend/requirements.txt": "# List of dependencies\nfastapi\npydantic\nmotor\n",
    "backend/Dockerfile": "# Dockerfile for backend service\n",
    "backend/docker-compose.yml": "# Compose for Mongo + backend\n",
    "backend/Makefile": "# CLI commands for development\n",
    "backend/README.md": "# Project Documentation\n"
}

def create_structure():
    for root, dirs in structure.items():
        for dir_path in dirs:
            full_path = Path(root) / dir_path
            full_path.mkdir(parents=True, exist_ok=True)
            print(f"Created directory: {full_path}")

    for file_path, content in files.items():
        full_file_path = Path(file_path)
        full_file_path.parent.mkdir(parents=True, exist_ok=True)
        with open(full_file_path, 'w') as f:
            f.write(content)
        print(f"Created file: {file_path}")

if __name__ == "__main__":
    create_structure()
