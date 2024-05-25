import React from 'react';
import data from '../data/data';

function WeekTab(props) {
	return (
		/*<h2>Дні тижня</h2>*/
		<table>
			<tbody>
				{props.data.map((element) => {
					return <p>{element.r030}</p>;
				})}
			</tbody>
		</table>
	);
}

export default WeekTab;
