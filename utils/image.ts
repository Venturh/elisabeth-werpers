export function getBlurredSrc(src:string){
    	const path = src.replace('//a.storyblok.com', '')
		.replace('https:', '');
    return `https://img2.storyblok.com/50x50/filters:blur(10)${path}`
}
