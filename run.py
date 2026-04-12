import subprocess
import sys

def run_command(command):
    result = subprocess.run(command, shell=True)
    if result.returncode != 0:
        print(f"Error running: {command}")
        sys.exit(1)

def main():
    print("Step 1: Preparing data...")
    run_command("python src/data/preprocessing.py")

    print("Step 2: Training model...")
    run_command("python src/training/train.py")

    print("Done.")

if __name__ == "__main__":
    main()