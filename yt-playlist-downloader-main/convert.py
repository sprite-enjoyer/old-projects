import os
import subprocess

def convert_mp4audio_to_mp3(mp4_dir, mp3_dir):
    mp4_files = [f for f in os.listdir(mp4_dir) if f.endswith(".mp4")]
    os.mkdir(mp3_dir)

    for mp4_file in mp4_files:
        input_file_path = os.path.join(mp4_dir, mp4_file)
        output_file_path = os.path.join(mp3_dir, os.path.splitext(mp4_file)[0] + ".mp3")

        ffmpeg_command = f'ffmpeg -i "{input_file_path}" -vn -acodec libmp3lame -q:a 2 "{output_file_path}"'

        try:
            subprocess.run(ffmpeg_command, shell=True, check=True)
            print(f"Conversion of {mp4_file} to {os.path.basename(output_file_path)} successful.")
        except subprocess.CalledProcessError as e:
            print(f"Error during conversion of {mp4_file}: {e}")