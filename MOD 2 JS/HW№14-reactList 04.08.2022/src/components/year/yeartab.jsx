import React from 'react';
import year from './year';

function YearTab(props) {
	return (
		/*<h2>Місяці року</h2>*/
		<table>
			<tbody>
				{props.year.map((element) => {
					return <p>{element}</p>;
				})}
			</tbody>
		</table>
	);
}

export default YearTab;
