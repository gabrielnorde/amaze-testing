import { Router } from 'express';
const links = [
	'https://t.maze.design/15615430?guerilla=true',
	'https://t.maze.design/15756155?guerilla=true',
];
let linkIndex = 1;
const routes = new Router();
routes.get('/', (req, res) => {
	linkIndex = linkIndex + 1 > links.length - 1 ? 0 : linkIndex + 1;
	res.status(301).redirect(links[linkIndex]);
});

export default routes;
