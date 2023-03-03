import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';
import {Page} from './page';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [pages, setPages] = useState([]);
	const [details, setDetails] = useState(null);

	async function fetchPages(){
		try {
			const response = await fetch(`${apiURL}/wiki`);
			const pagesData = await response.json();
			setPages(pagesData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchPages();
	}, []);

	async function fetchDetails(slug) {
		try {
            const response = await fetch(`${apiURL}/wiki/${slug}`);
            const pageData = await response.json();
            setDetails(pageData);
        } catch (err) {
            console.log("Oh no an error! ", err)
        }
    }

	return (
		<main>	
      <h1>WikiVerse</h1>
	  {details ? (
		<Page article={details} 
		onBackClick ={() => setDetails(null)}/>
	  ) : (
		<>
			<h2>An interesting 📚</h2>
			<PagesList pages={pages} 
			onArticleClick={fetchDetails}/>
			</>
	  )}
		</main>
	)
}