# Reminisce

Reminisce is memory box of events and adventures.

I built this fullstack app using React, Redux, Express.js, and Knex.js

The purpose of this app is for me to store and add memories of concents and trips I have been on so that I can look back on them.

```
npm install
git checkout -b <branchname>
npm run dev
```

## Notes

- When running knex, run `npm run knex <command>`, e.g. `npm run knex migrate:latest` rather than using `npx`
- When running webpack, run `npm run webpack <extra commands>`, e.g. `npm run webpack`, rather than using `npx`

### Back End

1.  Design a database to store a list of concerts and travels
2.  Build the migrations and seed data
3.  Build an API (back end route) to get the information from database
4.  Test API with Postman/Insomnia

### Front End

1.  Build a React Component with static html
2.  Build Redux Reducer
3.  Use `useSelector` to display the redux state in the React Component
4.  Build an API Client in the front end to request the information from back-end routes
5.  Build Thunk Actions to use the API and get the information
6.  Build Redux Actions to save task data from the thunk
7.  Use `useDispatch` and `useEffect` to dispatch the thunk when app loads

## Future development

- Include the ability to remove/delete records
- Include the ability to update records (e.g. for correcting typos)
- Potenitally add an external API (maybe an inspirational quote in the footer?)
