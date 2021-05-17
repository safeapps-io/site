import {createPortal} from 'react-dom';

import preview from 'img/preview.png'

export interface MetaProps {
    title?: string,
    description?: string;
    contentType?: 'article',
    image?: string;
}

export default function Meta(props: MetaProps): JSX.Element {
    const {
        title = '',
        description = '',
        contentType = 'article',
        image = preview,
    } = props;

    const siteHost = 'https://safeapps.io';
    const imageFullPath = siteHost + image;

    return createPortal(
        <>
            <title>{title}</title>
            <meta name="title" content={title}/>
            <meta name="twitter:title" content={title}/>
            <meta property="og:title" content={title}/>

            <meta name="twitter:site" content={siteHost}/>
            <meta property="og:site_name" content={siteHost}/>
            <meta itemProp="name" content={siteHost}/>

            <meta name="description" content={description}/>
            <meta name="twitter:description" content={description}/>
            <meta property="og:description" content={description}/>
            <meta itemProp="description" content={description}/>

            <meta name="twitter:image" content={imageFullPath}/>
            <meta property="og:image" content={imageFullPath}/>
            <meta itemProp="image" content={imageFullPath}/>

            <meta property="og:type" content={contentType}/>
            <meta property="og:locale" content="en"/>
        </>,
        document.head
    );
}
