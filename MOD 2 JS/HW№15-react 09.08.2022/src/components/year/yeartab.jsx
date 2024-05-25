import React from 'react';
import data from '../data/data';

function YearTab(props) {
	return (
		/*<h2>Місяці року</h2>*/
		<table>
			<tbody>
				{props.data.map((element) => {
					return <p>{element.txt}</p>;
				})}
			</tbody>
		</table>
	);
}

export default YearTab;
