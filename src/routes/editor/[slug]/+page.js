import { redirect } from '@sveltejs/kit';
import * as api from '$lib/api.js';

export async function load({ params }) {
	const { user } = await parent();
	if (!user.user) {
		throw redirect(302, `/login`);
	}

	const { slug } = params;
	const { article } = await api.get(`articles/${slug}`, null);
	return { article, slug };
}
