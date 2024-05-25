import React from 'react';
import data from '../data/data';

function ZodiacTab(props) {
	return (
		/*<h2>Знаки зодіаку</h2>*/
		<table>
			<tbody>
				{props.data.map((element) => {
					return <p>{element.rate}</p>;
				})}
			</tbody>
		</table>
	);
}

export default ZodiacTab;
