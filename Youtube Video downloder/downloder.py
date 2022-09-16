# pip install pytube

from pytube import Playlist
from pytube import YouTube

link = input("Paste Your Link Here : ")

yt = YouTube(link)

print("Title: ", yt.title)
print("Views: ", yt.views)
print("Thumbnail-Url: ", yt.thumbnail_url)

videos = yt.streams.all()
vid = list(enumerate(videos))
for i in vid:
    print(i)
print()
strm = int(input('Enter Index No: '))
print("Downloading....")
videos[strm].download('/Users/Family/Downloads/Youtube')
print("Complete")


# yd = yt.streams.get_highest_resolution()
# yd.download('/Users/Family/Downloads/Youtube')
# print("Complete")
# exit()

# ***** Playlist *****
py = Playlist(input('Enter Playlist Link: '))
print(f'Downloading : { py.title } ')
for video in py.videos:
    video.streams.first().download()
