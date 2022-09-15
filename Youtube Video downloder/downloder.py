# pip install pytube

from pytube import YouTube
from sys import argv

# link = argv[1]
link = input("Paste Your Link Here : ")

yt = YouTube(link)

print("Title: ", yt.title)

print("Views: ", yt.views)

yd = yt.streams.get_highest_resolution()

yd.download('/Users/Family/Downloads/Youtube')
