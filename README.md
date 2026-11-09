# Jasmine — Useful tech. Human touch.

A standalone personal portfolio featuring project stories, a static illustrated character, optional voice narration and three interactive exhibits:

- **Room planner:** rotate a small room, change its palette and add or remove tables.
- **CRM in motion:** move sample inquiries from new lead to tour to proposal, with live progress.
- **Quote studio:** change guest counts, settings and extras to update an illustrative proposal.

All demo records and prices are fictional. The portfolio does not connect to live business systems or send messages. Narration is off by default. The portrait remains still; decorative effects can be paused.

## Run

Open `public/index.html` in a browser, or run `npm run build` and serve `dist/` with a static server. There are no external dependencies, API keys, databases or sign-in requirements.

## Render

Create a Static Site from this repository. Branch: `main`. Build command: `node build.mjs`. Publish directory: `dist`. Use the returned public URL after the deployment is live.

## Files

`public/` contains the website and its local assets. `build.mjs` creates the deployable output. Font license files are retained in `public/assets/`. Portfolio content and character artwork belong to Jasmine.
