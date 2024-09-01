# TMDB-CLONE

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Requirement

Before you proceed, please make sure your machine has met the following requirements:

| Dependency |   Version   |
| ---------- | :---------: |
| Node       | >= v18.18.2 |
| NPM        |    >= v9    |

## Quick Start

i) Installation

```bash
# clone git repo into `tmdb-clone` folder
git clone https://github.com/ferryal/tmdb-clone.git tmdb-clone

# install project dependencies
cd tmdb-clone && npm install
```

ii) Obtain an API key from [The Movie Database API](https://developers.themoviedb.org/3) and add it to the `.env.local` file:

```bash
TMDB_KEY=your-api-key
```

ii) Running app

For **development**:

```bash
npm run dev
```

For **production**:

```bash
# build and serve our server
npm run build && npm start
```

## Features

- Search for movies, TV shows, or people by title.
- View movie details, including overview, release date, and average rating.
- Watch movie trailers.
- Browse popular movies, top-rated movies, upcoming movies, and now playing movies.
- Responsive design optimized for mobile, tablet, and desktop devices.

## Technologies Used

- [Next.js](https://nextjs.org/) - A React framework for building server-side rendered and static websites.
- [shadcn/ui](https://ui.shadcn.com/) - UI library for fundamental ui elements.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom designs.
- [The Movie Database API](https://developers.themoviedb.org/3) - An API that provides access to a vast collection of movie and TV show data.
- [Vercel](https://vercel.com/) - A cloud platform for static sites and serverless functions.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

```
DONT REPEAT YOURSELF - **HAPPY CODING**
```
