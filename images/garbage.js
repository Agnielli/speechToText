import { SvgCss } from 'react-native-svg/css';

const xml = `<svg fill="#333333" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 512 512" xml:space="preserve">
<g>
	<g>
		<path d="M82.952,134.729c4.174,78.441,20.438,348.879,21.201,361.577L105.097,512h301.806l0.944-15.694
			c0.765-12.698,17.029-283.136,21.201-361.577C429.048,134.729,82.952,134.729,82.952,134.729z M167.602,461.089l-14.599-279.58
			l33.346-1.741l14.599,279.58L167.602,461.089z M272.696,460.219h-33.391V180.194h33.391V460.219z M344.395,461.089l-33.346-1.741
			l14.603-279.58l33.346,1.741L344.395,461.089z"/>
	</g>
</g>
<g>
	<g>
		<path d="M316.325,44.522V0H195.68l-0.003,44.522H61.217v55.703c0,0,389.565,0,389.565,0V44.522H316.325z M282.935,44.522h-53.866
			v-11.13h53.866V44.522z"/>
	</g>
</g>
</svg>`

export const Garbage = () => <SvgCss xml={xml} width="50%" height="50%" />