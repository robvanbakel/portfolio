# Portfolio

My portfolio is built as a single-page application using the Vue CLI. While it might be overkill to use Vue (including the [Vue Router](https://router.vuejs.org) and even [Vuex](https://next.vuex.vuejs.org) for a portfolio that consists of only 3 pages, doing it this way provided an perfect solution for the challenges I had.

## Challenges

I wanted my portfolio to be available in two languages. I wanted to achieve this in a way where simply switching the domain would bring the user to the translated website. So, when visiting [robvanbakel.com](https://robvanbakel.com) visitors would be presented the English version of the website and [robvanbakel.nl](https://robvanbakel.nl) would result in the Dutch version. I found this to be a more elegant solution than just to prefix every route with `/en` or `/nl` and redirecting the visitor that way.

Since some components of the projects in my portfolio would be shown on both the homepage as well as on their respective project details page, I wanted to store these elements in a centralized place and reach out to the information that I needed instead of ending up copying changes in two different places. This would make modifying my portfolio far more flexible and less prone to human error.

## Solution

The Vue project is set up to check what the TLD of the domain is. Depending on this, Vue will read from the corresponding JSON file with the respective content for that language, and makes it globally available. The different pages within the website behave as templates, where this data gets injected. The website is then loaded, displaying everything in the correct language. 

#### Built With

- [Vue.js](https://v3.vuejs.org)
- [Sass](https://sass-lang.com)

## Portfolio Projects

- [robvanbakel.com/gotiny](https://robvanbakel.com/gotiny)
- [robvanbakel.com/scheduler](https://robvanbakel.com/scheduler)
