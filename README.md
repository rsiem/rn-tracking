<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better, please fork the repo and create a pull request or simply open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->





<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/rsiem/rn-tracking">
    <img src="images/logo.png" alt="Logo" width="100%" height="100%">
  </a>

  <h3 align="center">Tracking</h3>

  <p align="center">
    Mobile App created using React Native
    <br />
    <a href="https://github.com/rsiem/rn-tracking"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/rsiem/rn-tracking">View Demo</a>
    ·
    <a href="https://github.com/rsiem/rn-tracking/issues">Report Bug</a>
    ·
    <a href="https://github.com/rsiem/rn-tracking/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Mobile App created using React Native for the user to track their current location and record the user's location over time in the real world (e.g for a hike, a bike ride, a road trip, etc.)


### Built With
This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.
* [React Native](https://reactnative.dev/)
* [Express.js](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)
* [Ngrok](https://ngrok.com/)



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
```sh
npm install npm@latest -g
```

### Installation

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
```sh
git clone https://github.com/rsiem/rn-tracking.git
```
3. Install NPM packages
```sh
npm install
```
4. Enter your API in `config.js`
```JS
const API_KEY = 'ENTER YOUR API';
```



<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_
How to run / test the App :
1. Run the server, in "track-server" folder
```sh
npm run dev
```
2. Run Ngrok, in "track-server" folder
```sh
ngrok http 3000
```
3. Copy the ngrok link, e.g : "http://67d87759.ngrok.io" and change the baseUrl in tracker.js which is located in "tracks/src/api" into the ngrok link.
4. Run the app, in "tracks" folder
```sh
npm start -c
```


<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/rsiem/rn-tracking/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Richard Aldrich Siem - [@richard.siem](https://instagram.com/richard.siem) - richardaldrich.siem@gmail.com - [![LinkedIn][linkedin-shield]][linkedin-url2]

Project Link: [https://github.com/rsiem/rn-tracking](https://github.com/aangelo96/rsiem/rn-tracking)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Img Shields](https://shields.io)
* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Pages](https://pages.github.com)





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/rsiem/rn-tracking.svg?style=flat-square
[contributors-url]: https://github.com/rsiem/rn-tracking/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/rsiem/rn-tracking.svg?style=flat-square
[forks-url]: https://github.com/rsiem/rn-tracking/network/members
[stars-shield]: https://img.shields.io/github/stars/rsiem/rn-tracking.svg?style=flat-square
[stars-url]: https://github.com/rsiem/rn-tracking/stargazers
[issues-shield]: https://img.shields.io/github/issues/rsiem/rn-tracking.svg?style=flat-square
[issues-url]: https://github.com/rsiem/rn-tracking/issues
[license-shield]: https://img.shields.io/github/license/rsiem/rn-tracking.svg?style=flat-square
[license-url]: https://github.com/rsiem/rn-tracking/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url2]: https://www.linkedin.com/in/richard-aldrich-siem-147b73123/
[product-screenshot]: images/screenshot.png
