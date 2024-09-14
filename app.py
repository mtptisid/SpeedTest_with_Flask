from flask import Flask, render_template, jsonify
import speedtest

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get_speed', methods=['GET'])
def get_speed():
    st = speedtest.Speedtest()
    st.get_best_server()
    download_speed = st.download() / 1_000_000  # Convert to Mbps
    upload_speed = st.upload() / 1_000_000  # Convert to Mbps
    return jsonify({
        'download_speed': round(download_speed, 2),
        'upload_speed': round(upload_speed, 2)
    })

if __name__ == '__main__':
    app.run(debug=True)