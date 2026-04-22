from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from gradio_client import Client, handle_file
import os
import shutil
import time
from werkzeug.utils import secure_filename
client = Client("yisol/IDM-VTON")

#client = Client("yisol/IDM-VTON", hf_token="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")

app = Flask(__name__, static_folder="static")
CORS(app)

UPLOAD_FOLDER = "uploads"
OUTPUT_FOLDER = "static"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(OUTPUT_FOLDER, exist_ok=True)


# 🔥 Run AI Model
def run_virtual_tryon(person_path, garment_path):
    try:
        result = client.predict(
            dict={
                "background": handle_file(person_path),
                "layers": [],
                "composite": None
            },
            garm_img=handle_file(garment_path),
            garment_des="shirt",
            is_checked=True,
            is_checked_crop=False,
            denoise_steps=30,
            seed=42,
            api_name="/tryon"
        )

        temp_image_path = result[0]

        filename = f"output_{int(time.time())}.png"
        output_path = os.path.join(OUTPUT_FOLDER, filename)

        shutil.copy(temp_image_path, output_path)

        return filename

    except Exception as e:
        print("MODEL ERROR:", e)
        raise e


# 🚀 API Route
@app.route("/tryon", methods=["POST"])
def tryon():
    try:
        person = request.files["person"]
        garment = request.files["garment"]

        # ✅ Secure filenames
        person_filename = secure_filename(person.filename)
        garment_filename = secure_filename(garment.filename)

        person_path = os.path.join(UPLOAD_FOLDER, person_filename)
        garment_path = os.path.join(UPLOAD_FOLDER, garment_filename)

        person.save(person_path)
        garment.save(garment_path)
        
        person_path = os.path.abspath(person_path)
        garment_path = os.path.abspath(garment_path)
        
        output_filename = run_virtual_tryon(person_path, garment_path)

        return jsonify({
            "status": "success",
            "output": output_filename   # ✅ ONLY filename
        })

    except Exception as e:
        print(f"Error: {str(e)}")
        return jsonify({"error": str(e)}), 500


# ✅ Serve generated images
@app.route("/<filename>")
def serve_image(filename):
    return send_from_directory(OUTPUT_FOLDER, filename)


if __name__ == "__main__":
    app.run(debug=True, port=5000)