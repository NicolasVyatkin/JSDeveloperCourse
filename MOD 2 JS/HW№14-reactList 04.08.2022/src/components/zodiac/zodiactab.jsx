import React from 'react';
import zodiac from './zodiac';

function ZodiacTab(props) {
	return (
		/*<h2>Знаки зодіаку</h2>*/
		<table>
			<tbody>
				{props.zodiac.map((element) => {
					return <p>{element}</p>;
				})}
			</tbody>
		</table>
	);
}

export default ZodiacTab;
