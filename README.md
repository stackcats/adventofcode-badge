# Advent of Code Badge Generator

An interface over [Shields.io](https://shields.io) to facilitate the creation of badges from Advent of Code.

Deploy on your [Vercel](https://vercel.com) instance

---

## My Badge

<a href = "https://adventofcode.com/"><img src="https://img.shields.io/badge/dynamic/json?style=for-the-badge&logo=data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIAEAAQAMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABggFBwMECQH/2gAIAQEAAAAAo+ZXkwwNz5LQwnkD3pk68TyBrFb2kfbiejq3H30t5vM/jFs4d0tlVAMhcWlS5tScQAf/xAAYAQADAQEAAAAAAAAAAAAAAAABBQYCBP/aAAgBAhAAAABtxDuVyOa9rAi/ysLH/8QAGAEAAwEBAAAAAAAAAAAAAAAAAQIEAAP/2gAIAQMQAAAAnbL0oM3Osxl8n//EADYQAAEEAQEEBwYEBwAAAAAAAAIBAwQFBgcACBEhEBITIDEyQRQVIlNhchYXMFJic4KRkqPB/9oACAEBAAE/AOmkpLTI7SJS0sQpM+USgyyKoimqJx9dsgx+4xa2k0d9CKJYx0BXWTVFUe0BDHmPFOaL393xvtNXcR+jr5f4sntvLN9TWDIS/fGgH/oEe7K0xz6JQV2UHi85ynmxhlNSWG+2RGj5oTiBxIEVPUujduDr6wYx9AnF/aKe29E31NWZxfMrIRdFdpjntpSzsji4xNSpiRjkuSng7ECaBOKq31+Cuf09OCbyuc4gzDrbEGLqqjgDQMv8GXgaDkgtuhtHyXd11l5XdfHqbt7z+0okKQp/R9v4HNsH3d4GB59VZjQ5G5JrWWpKLElNorqdu0oIoOhyLbUTd/haj51+KrjIHYlcMCPGWNGaTtjJpSVVVw+QptIud3LRnlXQo9tdM+VGESfJQ/5pr1G9s63m82ypmZXU7DFJWPgbRA3wffNs+Sobh9wRIiEQFVJVREROaqq7acwPyR0kfu81sZSvK37Y7EeeJRYI+TcVkC5Ca+u2ZsNa8aRpZ4XayWJRAr7cUHyBDeb88OSI7OtOsOuMvtk262SgYGnAhIV4Kiovqnd3ZdLEvLNdQb6OiVNW6qQEd8r8oPFz7GdtftWS1CyH3VUSVXGqpwhjdXyyXvApH/A20J1Yd03yT2axdIscsyBuaHyD8BkD9vgW281pczBkhqXjjYlW2Kh7yBrmAPn5JA/wO9yqZgSbSuj2sxYkByS0EmQIK4rTKkiGaCPMlFPTbWzVXHKHDKjTPTOcycN+A2MmRFPiLcMk5Ndb5jvifToRqtSWONWemOpEuP7rCE6kR+YfAFionxxzJfUPFva/j1MS7tY1DPObVNyXBiSTBQJxlF+FVRfX9L//xAAlEQACAwABAwMFAQAAAAAAAAABAgMEBQARQVEGEDESFDI0YpH/2gAIAQIBAT8A5o2Wp0LlpAC0MLuAfjqo68y7T3s6lccAPNCjkD4BI9tSTVhijky68MzBuskcjFSy/wAnzzV9V13zNGjoU7FG29eRVSVeqsxHZhzH9VVosrNoUali7bSBFZIkIVWHljzLl1Zo5JNSvDAWYGOONixC/wBHz7bfX1JqR4Fb9WuwkuzAf4gPnmMD6Y1nw7H6VpjJTlPnuhPs6l0dQxUkEdR8jmRk18isYISzu7l5JX/J2Pc81sqvr1ft5yVKsHjkX8kYdxyNTHGiFyxVQPqPyenc8//EACIRAAICAAUFAQAAAAAAAAAAAAECAAMEEBIhURETIzJBgf/aAAgBAwEBPwCIup1Xkx10O68HplWKySLCRwRK8O3cR0cMoYbiWYdjY7uyqpb7LBWCBWxPJOVXgrNzex2QS3z1i0ey7MMhLLDY3U7fAJXYam1D9EO5Jn//2Q==&labelColor=black&color=118a03&label=AoC++&query=allStars&url=https://adventofcode-badge.vercel.app/api" target="_blank"></a>

## Setup

#### Get your session id 

There is no open api to get user's profile.

Press F12 while you are logged in on [adventofcode.com](https://adventofcode.com/) to open the developer tools of your browser. 

Then open the `Application` Tab on Chromium Browsers or `Storage` on Firefox. There you can have a look at your cookies and copy the session id.

#### Deploy to Vercel

Import project from this repo.

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/stackcats/adventofcode-badge)

Add your environment variable named `SESSION` value is your session id.

Click deploy. See your domains to use the API!
