# Speed Test App

## Overview

This project is a speed test application built using Flask for the backend, with HTML, CSS, and JavaScript handling the frontend. The application allows users to test their internet speed, displaying results on a visually appealing speedometer dashboard. The project includes functionalities for both download and upload speed tests, with real-time updates and a responsive design.

## Features

- **Real-time Speed Test**: Perform download and upload speed tests and display results on a speedometer gauge.
- **Visual Speedometers**: Interactive and animated speedometer dials for displaying speed test results.
- **Responsive Design**: Fully responsive design for both desktop and mobile devices.
- **Footer with Dynamic Visibility**: A footer that appears when hovering near the bottom of the page.

## Technologies Used

- **Flask**: Python web framework for the backend.
- **HTML**: Structure and markup of the web pages.
- **CSS**: Styling and layout of the web pages.
- **JavaScript**: Client-side scripting for dynamic interactions and speedometer animations.
- **Speedtest CLI**: Python library for performing speed tests.

## Installation

### Prerequisites

- Python 3.x
- Flask
- Speedtest CLI

### Clone the Repository

```bash
git clone https://github.com/yourusername/speed-test-app.git
cd speed-test-app
```

### Install Dependencies

**Create a virtual environment and install the required packages:**

```bash
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
pip install flask speedtest-cli
```

### Running the Application

**Start the Flask application:**

```bash
python app.py
```

Visit http://127.0.0.1:5000 in your web browser to view the application.

### Project Structure

```bash
speed-test-app/
│
├── app.py                # Flask application
├── requirements.txt      # Python dependencies
├── static/
│   ├── css/
│   │   └── styles.css    # Custom styles
│   ├── js/
│   │   └── script.js     # JavaScript for interactivity
│   └── images/
│       └── logo.png      # Images used in the project
├── templates/
│   └── index.html        # HTML template for the speed test page
└── README.md             # This file
```

## Usage

1. **Start the Application**: Run `python app.py` to start the Flask server.
2. **Perform a Speed Test**: Click the “Start Speed Test” button to begin the speed test. The results will be displayed on the speedometers.
3. **View Results**: The download and upload speeds will be shown on interactive dials, with the results appearing in real-time.

## Screenshots

<!-- Add your screenshots here -->

<img width="1440" alt="Screenshot 2024-09-15 at 8 01 30 PM" src="https://github.com/user-attachments/assets/00eed8e0-c7ce-4b25-8993-a2829bb14849">

<img width="1440" alt="Screenshot 2024-09-15 at 8 17 19 PM" src="https://github.com/user-attachments/assets/8d0a0a50-b7f0-429e-940e-1c524a618357">



## Contributing

Feel free to fork the repository and submit pull requests for improvements or bug fixes. Please follow the existing code style and ensure that any new code is well-documented.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please contact [Siddharamyya M](mailto:your.email@example.com).
