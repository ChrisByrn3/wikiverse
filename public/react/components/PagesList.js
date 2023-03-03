import React from 'react';
import { Page } from './Page';

export const PagesList = ({pages, onArticleClick}) => {
	return (
	<ul>
		{pages.map((page =>(
			<li key={page.slug} onClick={() => onArticleClick(page.slug)}>
				{page.title}
				</li>
		)) 
	)}
		</ul>
	)}
