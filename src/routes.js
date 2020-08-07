import { Router } from 'express';
const links = ['link1', 'link2'];
let linkIndex = 1;
const routes = new Router();
routes.get('/', (req, res) => {
	linkIndex = linkIndex + 1 > links.length ? 0 : linkIndex + 1;
	res.json({
		link: links[linkIndex],
	});
});

export default routes;
