import React from 'react';
import week from './week';

function WeekTab(props) {
	return (
		/*<h2>Дні тижня</h2>*/
		<table>
			<tbody>
				{props.week.map((element) => {
					return <p>{element}</p>;
				})}
			</tbody>
		</table>
	);
}

export default WeekTab;
