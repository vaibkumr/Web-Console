# Web-console
A simple Information Console for personal websites. Can be used for personal portfolio/resume websites.
Live example: https://timetraveller-san.github.io/

# How to
- Create your personal data following the template in `data.json`
- `data.json` must be hosted somewhere (like github pages)
- Change the `var url` to the url of your `data.json` in `console.js`
- Change the image `avatar.png` to your own image.
- Open `index.html`
- Done

#  data.json format
- Each key-data pair is a command-information pair
- Currently only flat jsons allowed, you can make small changes if you want more depth
- List of all commands along with a short Description must be present in "help"
- Do not remove the "error" key, it's the default for a wrong input
- All values support html format. Use italics, bolds, font, size, links etc however you like

# theme
- `change_theme()` in `console.js` lets you change theme through the console
- It changes the css variables in `style.css`

# Customization
- Make changes in style.css
- data.json supports HTML entities, feel free to use HTML embeds, iframes etc
- Add any number of commands in data.json
