from pytube import YouTube, Playlist
from convert import convert_mp4audio_to_mp3
import sys

playlist_URL = sys.argv[1]
playlist = Playlist(playlist_URL)
yt_save_dir = "./downloads"
mp3_dir = "./mp3"

for video_URL in playlist: 
  yt = YouTube(video_URL)
  mp4audio_128kbps = yt.streams.get_by_itag(140)
  mp4audio_128kbps.download(yt_save_dir)

convert_mp4audio_to_mp3("./downloads", "./mp3")