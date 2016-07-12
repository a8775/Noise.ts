# Noise.ts

## About

## Testing hardware
This is usually very straightforward, I like Skype audio settings page where you have the
Speaker test button and microphone *realtime* signal level bar.  

## Running Sound eXchange (sox.exe)
This project is using SoX - Sound eXchange:
[Sound eXchange home page](http://sox.sourceforge.net/Main/HomePage)

Run the following command to test if your microphone is working correctly:

```
d:\>sox.exe -t waveaudio 0 -t wav outfile.wav
```

You should get in the output something like that:

```
Input File     : '0' (waveaudio)
Channels       : 2
Sample Rate    : 48000
Precision      : 16-bit
Sample Encoding: 16-bit Signed Integer PCM

In:0.00% 00:00:02.56 [00:00:00.00] Out:119k  [      |      ]        Clip:0
```

After that you can play just created file with any thing that support Microsoft 
WAV files.

It's possible you will need to change the driver 0, 1, etc. but in my case 
it worked fine from the beginning. Some people are saying that it's possible
to list all installed media drivers with `devcon.exe` tool with the following 
command:

```
devcon.exe listclass media
```   

To get `devcon.exe` you need to install [Windows Driver Kit](https://developer.microsoft.com/en-us/windows/hardware/windows-driver-kit) 
from Microsoft, and possibly use description names but I could not find
information how actually do that. More on that subject could be found on:
[Windows Device Console (Devcon.exe)](https://msdn.microsoft.com/pl-pl/library/windows/hardware/ff544707(v=vs.85).aspx).

## WAV files
WAV file format description: [http://soundfile.sapp.org/doc/WaveFormat/](http://soundfile.sapp.org/doc/WaveFormat/)  






